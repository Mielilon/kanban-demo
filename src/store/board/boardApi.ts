import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskType } from '../../types/task';

export const boardsApi = createApi({
  reducerPath: 'api/board',
  tagTypes: ['Boards'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getBoards: build.query<TaskType[], number>({
      query: () => 'boards',
      providesTags: (result) => (result
        ? [...result.map(() => ({ type: 'Boards' as const, id: 'LIST' })), 'Boards']
        : ['Boards']),
    }),
    addBoard: build.mutation<any, any>({
      query: (body) => ({
        url: 'boards',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }],
    }),
    deleteBoard: build.mutation<any, any>({
      query: ({ id }) => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }],
    }),
    editBoard: build.mutation<any, any>({
      query: ({ id, ...patch }) => ({
        url: `boards/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetBoardsQuery, useAddBoardMutation, useEditBoardMutation, useDeleteBoardMutation,
} = boardsApi;
