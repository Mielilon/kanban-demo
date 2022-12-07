import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const statusesApi = createApi({
  reducerPath: 'api/statuses',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getStatuses: build.query({ query: () => 'statuses' }),
  }),
});

export const { useGetStatusesQuery } = statusesApi;
