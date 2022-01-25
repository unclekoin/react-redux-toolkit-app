import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

const Task = ({ id, text, removeTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/${id}`} className="text-decoration-none text-secondary flex-grow-1">
        <div>{text}</div>
      </Link>
      <i onClick={removeTask} className="bi bi-x fs-4 lh-1" role="button" />
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTask: () => dispatch(remove({id: ownProps.id})),
  };
};

export default connect(null, mapDispatchToProps)(Task);
