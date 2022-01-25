import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Task from '../components/task';
import { createTask, getTaskList } from '../store';

const Home = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(getTaskList());
  const [text, setText] = useState('');
  console.log(taskList)

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) dispatch(createTask(text));
    setText('');
  };

  return (
    <>
      <h1 className="text-center mb-4">Task List</h1>
      <form
        onSubmit={onSubmit}
        className="d-flex justify-content-between align-items-center mb-5"
      >
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="form-control me-3"
          placeholder="Enter task"
        />
        <button type="submit" className="btn btn-outline-primary col-3">
          Add Task
        </button>
      </form>
      <ul className="list-group">
        {taskList.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
};

export default Home;
