import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryType } from '../../types/category';

export const categoriesApi = createApi({
  reducerPath: 'api/categories',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getCategories: build.query<CategoryType[], number>({
      query: () => 'categories',
      providesTags: (result) => (result
        ? [...result.map(() => ({ type: 'Categories' as const, id: 'LIST' })), 'Categories']
        : ['Categories']),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
