import { configureStore } from '@reduxjs/toolkit';
import { boardsApi } from './board/boardApi';
import { statusesApi } from './status/statusApi';
import { tasksApi } from './task/taskApi';
import { categoriesApi } from './category/categoryApi';
import { tagsApi } from './tag/tagApi';
import alertSlice from './alert/alertSlice';
import taskSlice from './task/taskSlice';
import taskFormSlice from './taskForm/taskFormSlice';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [statusesApi.reducerPath]: statusesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [alertSlice.name]: alertSlice.reducer,
    [taskSlice.name]: taskSlice.reducer,
    [taskFormSlice.name]: taskFormSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      tasksApi.middleware,
      boardsApi.middleware,
      statusesApi.middleware,
      categoriesApi.middleware,
      tagsApi.middleware,
    ),
});
export type TypeRootState = ReturnType<typeof store.getState>;
