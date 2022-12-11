import React, { useState } from 'react';
import { useEditTaskMutation } from '../../store/task/taskApi';
import { TaskType } from '../../types/task';
import { StatusType } from '../../types/status';
import { GroupItemInterface, FormedGroupItemInterface } from '../../types/group';

import TaskGroup from '../TaskGroup/TaskGroup';
import Container from '../Container/Container';
import './TaskBoard.sass';
import Button from '../Button/Button';

const classWrapper = 'tasks-board';
const contentLayout = 'flex flex--align-start gap2';

type TaskBoardProps = {
  taskListData: TaskType[],
  statusesData: StatusType[],
};

/**
 * Компонент доски задач.
 * Отвечает за отображение доски задач, а также за формирование
 * данных для групп и установку состояния перетаскиваемой карточки.
 *
 * @param props пропсы компонента
 * @param props.taskListData данные задач, приходят с сервера
 * @param props.buttonIconSize данные статусов/групп, приходят с сервера
 * @returns компонент доски задач
 */

function TaskBoard({
  taskListData: tasks,
  statusesData: statuses,
}: TaskBoardProps): React.ReactElement {
  const [editTask] = useEditTaskMutation();

  const [draggingTaskId, setDraggingTaskId] = useState<number | null>(null);

  const handleTaskGroupDrop = (groupId: number) => {
    const draggingTask = tasks.find((item) => item.id === draggingTaskId);
    if (!draggingTask) return;
    editTask({
      id: draggingTask.id,
      status: groupId,
    });
  };

  const getTaskGroups = (taskList: TaskType[], groupList: GroupItemInterface[]) => {
    const groups = groupList.map<FormedGroupItemInterface>((item) => ({ ...item, tasks: [] }));
    taskList.forEach((task) => {
      groups.find((item) => item.id === task.status)?.tasks.push(task);
    });
    return groups.map((group) => ({
      ...group,
      tasks: group.tasks.sort((a: TaskType, b: TaskType) => a.order - b.order),
    }));
  };

  const taskGroups = getTaskGroups(tasks, statuses);

  return (
    <Container classWrapper={classWrapper} contentLayout={contentLayout}>
      {taskGroups.map((taskGroup) => (
        <TaskGroup
          onTaskGroupDrop={() => handleTaskGroupDrop(taskGroup.id)}
          setDraggingTaskId={setDraggingTaskId}
          taskGroup={taskGroup}
          key={taskGroup.id}
        />
      ))}
      <div className="button-header-wrapper">
        <Button
          iconType="plus"
          onClick={() => {}}
          className="button--header button--card button--uppercase card card--header"
        >
          Add Status
        </Button>
      </div>
    </Container>

  );
}

export default TaskBoard;
