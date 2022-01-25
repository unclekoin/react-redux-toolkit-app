import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTask } from '../store';

const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(id));
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/${id}`} className="text-decoration-none text-secondary flex-grow-1">
        <div>{text}</div>
      </Link>
      <i onClick={handleDelete} className="bi bi-x fs-4 lh-1" role="button" />
    </li>
  );
};

export default Task;
