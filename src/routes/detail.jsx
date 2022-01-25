import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTaskList } from '../store';
import { getDate } from '../utils/get-date';

const Detail = () => {
  const { taskId } = useParams();
  const tasksList = useSelector(getTaskList());
  const task = tasksList.find((task) => task.id === taskId);
  
  return (
    <>
      <Link to="/" className="btn btn-outline-secondary">
        <i className="bi bi-arrow-left me-2" />
        Back
      </Link>
      <h1 className="text-center mb-4">Task page</h1>
      <div>
        <span className="fw-bolder">Task created:</span> {getDate(taskId)}
      </div>
      <div>
        <span className="fw-bolder">Task:</span>{' '}
        {task ? task.text : 'Something went wrong!'}
      </div>
    </>
  );
};

export default Detail;
