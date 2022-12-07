import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeGroupId } from '../../store/taskForm/taskFormSlice';
import { BoardType } from '../../types/board';
import './ViewLink.sass';

type ViewProps = {
  board: BoardType
}
function ViewLink({ board }: ViewProps): React.ReactElement {
  const { name, priority, id } = board;
  const { board: activeBoardId } = useParams();
  const dispatch = useDispatch();
  return (
    <li className={`view-list__item ${id === Number(activeBoardId) ? 'active' : ''}`}>
      <span className={`view-item-priority view-item-priority--${priority}`} />
      <Link to={`/${id}`} className="view-link" onClick={() => dispatch(changeGroupId(null))}>{name}</Link>
    </li>
  );
}

export default ViewLink;
