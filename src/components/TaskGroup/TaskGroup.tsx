import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import GroupHeader from '../GroupHeader/GroupHeader';
import Task from '../Task/Task';
import './TaskGroup.sass';
import Button from '../Button/Button';
import { TaskType } from '../../types/task';
import { changeGroupId } from '../../store/taskForm/taskFormSlice';

type TaskGroupProps = {
  taskGroup: {
    tasks: TaskType[],
    id: number,
    name: string,
  },
  setDraggingTaskId: React.Dispatch<React.SetStateAction<null | number>>,
  onTaskGroupDrop: React.DragEventHandler<HTMLDivElement> | undefined,
}

function TaskGroup({
  taskGroup, setDraggingTaskId, onTaskGroupDrop,
}: TaskGroupProps): React.ReactElement {
  const { board: activeBoardId } = useParams();
  const [currentGroup, setCurrentGroup] = useState<Element | null>(null);
  const activeGroupId = useSelector((state) => state.taskForm);
  const dispatch = useDispatch();

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCurrentGroup((e.target as HTMLElement).closest('.tasks-wrapper'));
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
          <Button className="button--uppercase button--card" iconType="plus" onClick={() => dispatch(changeGroupId(id))}>New Task</Button>
        ) }
      </div>
    </div>
  );
}

export default TaskGroup;
