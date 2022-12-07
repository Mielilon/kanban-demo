import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TagType } from '../../types/tag';

export const tagsApi = createApi({
  reducerPath: 'api/tag',
  tagTypes: ['Tags'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getTags: build.query<TagType[], number>({
      query: () => 'tags',
      providesTags: (result) => (result
        ? [...result.map(() => ({ type: 'Tags' as const, id: 'LIST' })), 'Tags']
        : ['Tags']),
    }),
    addTag: build.mutation<TagType[], number>({
      query: (body) => ({
        url: 'tags',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Tags', id: 'LIST' }],
    }),
    deleteTag: build.mutation<TagType[], { id: number }>({
      query: ({ id }) => ({
        url: `tags/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tags', id: 'LIST' }],
    }),
    editTag: build.mutation<TagType[], any>({
      query: ({ id, ...patch }) => ({
        url: `tags/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: [{ type: 'Tags', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTagsQuery, useAddTagMutation, useEditTagMutation, useDeleteTagMutation,
} = tagsApi;
