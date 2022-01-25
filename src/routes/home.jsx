import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from '../components/task';
import { create } from '../store';

const Home = ({ tasks, addTask }) => {
  const [text, setText] = useState('');

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) addTask(text);
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
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) => dispatch(create({
      id: Date.now().toString(),
      text
    })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
