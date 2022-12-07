import { createSlice } from '@reduxjs/toolkit';

const taskFormSlice = createSlice({
  name: 'taskForm',
  initialState: {
    groupId: null,
  },
  reducers: {
    changeGroupId(state, action) {
      state.groupId = action.payload;
    },
  },
});

export default taskFormSlice;
export const { changeGroupId } = taskFormSlice.actions;
