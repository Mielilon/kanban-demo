import React, { useEffect, useRef, useState } from 'react';
import AddBoardForm from '../AddForm/AddForm';
import { BoardType } from '../../types/board';
import Button from '../Button/Button';
import ViewLink from '../ViewLink/ViewLink';
import './ViewList.sass';

type ViewLinkProps = {
  boards: BoardType[]
}

function ViewList({ boards }: ViewLinkProps): React.ReactElement {
  const [isEditable, setIsEditable] = useState(false);
  const viewItemRef = useRef(null);

  const handleClick = () => {
    setIsEditable(true);
  };

  useEffect(() => {
    viewItemRef.current?.scrollTo(9999, 0);
  }, [isEditable]);

  return (
    <ul className="view-list" ref={viewItemRef}>
      {boards.map((board) => <ViewLink key={board.id} board={board} />)}
      <li className="view-list__item">
        { isEditable
          ? <AddBoardForm setIsEditable={setIsEditable} action="addBoard" />
          : <Button className="view-add-button view-list__view-add-button" onClick={handleClick}>New board</Button> }
      </li>
    </ul>
  );
}

export default ViewList;
