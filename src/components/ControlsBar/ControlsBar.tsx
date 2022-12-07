import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ViewActiveName from '../ViewActiveName/ViewActiveName';
import SidebarToggleButton from '../SidebarToggleButton/SidebarToggleButton';
import ViewList from '../ViewList/ViewList';
import Container from '../Container/Container';
import { useGetBoardsQuery } from '../../store/board/boardApi';

function ControlsBar(): React.ReactElement {
  const { board: activeBoardId } = useParams();
  const { data: boards, isLoading: isBoardsLoading } = useGetBoardsQuery(5);
  const activeBoard = boards?.find((board) => board.id === +activeBoardId);

  if (!activeBoardId) <Navigate to="/1" />;

  return (
    <Container classWrapper="bar bar--controls" contentLayout="flex flex--align-center gap1">
      {isBoardsLoading
        ? <div>Loading...</div>
        : (
          <>
            <SidebarToggleButton />
            <ViewActiveName activeBoard={activeBoard} />
            <ViewList boards={boards} />
          </>
        )}
    </Container>
  );
}

export default ControlsBar;
