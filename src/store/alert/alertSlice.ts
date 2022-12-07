import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: [],
  reducers: {
    addAlert(state, action) {
      state.push(action.payload);
    },
    removeAlert(state, action) {
      const index = state.findIndex((elem) => elem.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default alertSlice;
export const { addAlert, removeAlert } = alertSlice.actions;
