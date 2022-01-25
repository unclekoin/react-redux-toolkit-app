import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    create: (state, action) => {
      state.entities.push(action.payload);
    },
    remove: (state, action) => {
      state.entities = state.entities.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});

const { reducer: taskReducer, actions } = taskSlice;
export const { create, remove } = actions;

export const createTask = (text) => (dispatch) => {
  dispatch(
    create({
      id: Date.now().toString(),
      text,
    })
  );
};

export const removeTask = (id) => (dispatch) => {
  dispatch(remove({ id }));
};

export const getTaskList = () => (state) => state.entities;

export default configureStore({ reducer: taskReducer });
