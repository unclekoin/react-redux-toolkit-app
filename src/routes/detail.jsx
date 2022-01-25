import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = ({ task }) => {
  const getDate = () =>
    task ? new Date(Number(task.id)).toDateString() : new Date().toDateString();
  
  return (
    <>
      <Link to="/" className="btn btn-outline-secondary">
        <i className="bi bi-arrow-left me-2" />
        Back
      </Link>
      <h1 className="text-center mb-4">Task page</h1>
      <div>
        <span className="fw-bolder">Task created:</span> {getDate()}
      </div>
      <div>
        <span className="fw-bolder">Task:</span>{' '}
        {task ? task.text : 'Something went wrong!'}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { task: state.find((task) => task.id === id) };
};

export default connect(mapStateToProps)(Detail);
