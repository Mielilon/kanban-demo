import React from 'react';
import Card from '../Card/Card';
import './Task.sass';
import Icon from '../Icon/Icon';
import { TaskType } from '../../types/task';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';

type TaskProps = {
  task: TaskType,
  onDragStart: React.Dispatch<React.SetStateAction<null | number>>,
}

function Task({ task, onDragStart }: TaskProps): React.ReactElement {
  const { board: activeBoardId } = useParams();
  const dragStartHandler = () => {
    onDragStart(task.id);
  };
  const {
    category,
    title,
    priority,
    dueDate,
    startDate,
    tags,
    id,
  } = task;

  let cardDate;
  if (startDate === dayjs(new Date()).format('DD/MM/YYYY') && dueDate) {
    cardDate = `Due day: ${dueDate}`;
  } else if (startDate && dueDate) {
    cardDate = `${startDate} – ${dueDate}`;
  } else if (startDate && !dueDate) {
    cardDate = `Start date: ${startDate}`;
  } else {
    cardDate = 'No date';
  }
  return (
    <Link
      className="task-wrapper"
      draggable
      onDragStart={() => dragStartHandler()}
      to={`/${activeBoardId}/${id}`}
    >
      <Card type="task">
        <div className="card__category category">{category}</div>
        <div className="card__desc">{title}</div>
        <div className="card__info-wrapper">
          <div className={`card__status priority priority--${priority}`}>
            <Icon type="flag" />
          </div>
          <div className="card__deadline deadline">
            {cardDate}
          </div>
        </div>
        <div className="card__tags tags">
          {tags.map((tag) => <span className={`tag tag--${tag.color}`} key={tag.name}>{tag.name}</span>)}
          <span className="tag">Важное</span>
        </div>
      </Card>
    </Link>
  );
}

export default Task;
