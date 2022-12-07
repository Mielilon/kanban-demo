import React from 'react';
import {
  Route, BrowserRouter, Routes, Navigate,
} from 'react-router-dom';
import { AppRoute } from '../../const';
import TaskPage from '../../pages/TaskPage/TaskPage';
import FullTask from '../Modals/FullTask/FullTask';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.BOARD}
          element={<TaskPage />}
        >
          <Route
            path={AppRoute.TASK}
            element={<FullTask />}
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/1" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
