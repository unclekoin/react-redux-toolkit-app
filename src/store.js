import { configureStore, createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((task) => task.id !== action.payload.id),
  },
});

export const { create, remove } = taskSlice.actions;

export default configureStore({ reducer: taskSlice.reducer });
