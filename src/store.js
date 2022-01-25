import { createStore } from 'redux';

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

const addTask = (text) => {
  return {
    type: ADD_TASK,
    payload: { id: Date.now().toString(), text },
  };
};

const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
};

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

const taskStore = createStore(taskReducer);

export const actionCreators = {
  addTask,
  removeTask,
};

export default taskStore;
