import React from 'react';
import { Outlet } from 'react-router-dom';
import TasksBoard from '../../components/TaskBoard/TaskBoard';
import Header from '../../components/Header/Header';
import { useGetTasksQuery } from '../../store/task/taskApi';
import { useGetStatusesQuery } from '../../store/status/statusApi';
import '../Page.sass';
import './TaskPage.sass';
import AlertWrapper from '../../components/AlertWrapper/AlertWrapper';

function TasksPage(): React.ReactElement {
  const { data: tasksData, isLoading: isTasksLoading } = useGetTasksQuery(4);
  const { data: statusesData, isLoading: isStatusesLoading } = useGetStatusesQuery(4);

  return (
    <div className="page page--gray page--tasks">
      <Header />
      {isTasksLoading && isStatusesLoading
        ? <div>Loading...</div>
        : tasksData && <TasksBoard taskListData={tasksData} statusesData={statusesData} />}
      <AlertWrapper />
      <Outlet />
    </div>
  );
}

export default TasksPage;
