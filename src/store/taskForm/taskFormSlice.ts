import { createSlice } from '@reduxjs/toolkit';

export interface TaskFormSliceState {
  groupId: null | number
}

const taskFormSlice = createSlice<TaskFormSliceState, any>({
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
