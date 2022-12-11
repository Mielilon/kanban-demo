import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import GroupHeader from '../GroupHeader/GroupHeader';
import Task from '../Task/Task';
import './TaskGroup.sass';
import Button from '../Button/Button';
import { TaskType } from '../../types/task';
import { changeGroupId, TaskFormSliceState } from '../../store/taskForm/taskFormSlice';
import { TypeRootState } from '../../store';

type TaskGroupProps = {
  taskGroup: {
    tasks: TaskType[],
    id: number,
    name: string,
  },
  setDraggingTaskId: React.Dispatch<React.SetStateAction<null | number>>,
  onTaskGroupDrop: React.DragEventHandler<HTMLDivElement> | undefined,
};

/**
 * Компонент группы задач.
 *
 * @param props на данный момент формируются только в компоненте TaskBoard
 * @param props.taskGroup сформированные данные группы
 * @param props.setDraggingTaskId функция добавления в состояние id перетаскиваемой карточки
 * @param props.onTaskGroupDrop функция для изменения статуса карточки
 * @returns компонент группы задач
 */
function TaskGroup({
  taskGroup, setDraggingTaskId, onTaskGroupDrop,
}: TaskGroupProps): React.ReactElement {
  const dispatch = useDispatch();

  const { board: activeBoardId } = useParams();

  /**
   * activeGroupId принимает объект с id активной группы
   */
  const activeGroupId = useSelector<TypeRootState>((state) => state.taskForm) as TaskFormSliceState;

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const { name: title, tasks: taskListData, id } = taskGroup;
  const tasks = taskListData.filter((task) => task.board === Number(activeBoardId));

  return (
    <div className="tasks-group">
      <GroupHeader
        title={title}
        tasksNumber={tasks.length}
        groupId={id}
      />
      <div
        className="tasks-wrapper"
        data-id={id}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={onTaskGroupDrop}
      >
        {tasks.map((task) => (
          <Task
            onDragStart={setDraggingTaskId}
            key={task.id}
            task={task}
          />
        ))}
        { activeGroupId.groupId === id ? <AddTaskForm groupId={id} /> : (
          <Button className="button--uppercase button--card" iconType="plus" onClick={() => dispatch(changeGroupId && changeGroupId(id))}>New Task</Button>
        ) }
      </div>
    </div>
  );
}

export default TaskGroup;
