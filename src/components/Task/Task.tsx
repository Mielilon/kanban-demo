import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import './Task.sass';
import Icon from '../Icon/Icon';
import { TaskType } from '../../types/task';
import { formatPeriod } from '../../utils/dateHelpers';

type TaskProps = {
  task: TaskType
  onDragStart: React.Dispatch<React.SetStateAction<null | number>>
};

/**
 * Компонент карточки задачи.
 * @param props пропсы компонента
 * @param props.task объект с данными задачи
 * @param props.onDragStart
 * Событие начала перетаскивания карточки.
 * Выполняется функция добавления id перетаскиваемой карточки в состояние доски.
 * @returns компонент задачи.
 */
function Task({ task, onDragStart }: TaskProps): React.ReactElement {
  const {
    category,
    title,
    priority,
    dueDate,
    startDate,
    tags,
    id,
  } = task;
  const { board: activeBoardId } = useParams();

  const dragStartHandler = () => {
    onDragStart(id);
  };

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
            {formatPeriod(startDate, dueDate)}
          </div>
        </div>
        <div className="card__tags tags">
          {tags.map((tag) => <span className={`tag tag--${tag.color}`} key={tag.name}>{tag.name}</span>)}
        </div>
      </Card>
    </Link>
  );
}

export default Task;
