import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'addTask',
  initialState: {
    status: 1,
    category: '',
    title: '',
    content: '',
    order: 0,
    startDate: '',
    dueDate: '',
    priority: 'none',
    tags: [],
  },
  reducers: {
    changeTaskData(state, action) {
      state[action.payload.key] = action.payload.value;
    },
    clearTaskData(state) {
      state.category = '';
      state.title = '';
      state.startDate = '';
      state.dueDate = '';
      state.priority = 'none';
    },
  },
});

export default taskSlice;
export const { changeTaskData, clearTaskData } = taskSlice.actions;
