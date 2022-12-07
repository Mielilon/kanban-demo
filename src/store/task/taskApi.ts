import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskType } from '../../types/task';

export const tasksApi = createApi({
  reducerPath: 'api/tasks',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getTasks: build.query<TaskType[], number>({
      query: () => 'tasks',
      providesTags: (result) => (result
        ? [...result.map(() => ({ type: 'Tasks' as const, id: 'LIST' })), 'Tasks']
        : ['Tasks']),
    }),
    // сделать получение задачи
    getTask: build.query<TaskType, number>({
      query: () => 'tasks',
    }),
    editTask: build.mutation<any, any>({
      query: ({ id, ...patch }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    addTask: build.mutation<any, any>({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
});

export const { useGetTasksQuery, useEditTaskMutation, useAddTaskMutation } = tasksApi;
