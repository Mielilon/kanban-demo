import React, { useState } from 'react';
import '../Button/Button.sass';
import './ViewActiveName.sass';
import AddForm from '../AddForm/AddForm';
import ViewPopup from '../Popups/ViewPopup/ViewPopup';
import ChangeStatusPopup from '../Popups/ChangeBoardPriorityPopup/ChangeBoardPriorityPopup';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
import { BoardType } from '../../types/board';

type ViewActiveNameProps = {
  activeBoard: BoardType,
}

function ViewActiveName({ activeBoard }: ViewActiveNameProps): React.ReactElement {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="view-active-name">
      <PopupWrapper
        buttonClassName={`view-active-name__priority view-active-name__priority--${activeBoard.priority}`}
      >
        <ChangeStatusPopup
          setIsEditable={setIsEditable}
          activeBoard={activeBoard}
        />
      </PopupWrapper>
      {isEditable ? <AddForm setIsEditable={setIsEditable} placeholder={activeBoard.name} action="editBoard" />
        : (
          <>
            <p className="view-active-name__name">{activeBoard.name}</p>
            <PopupWrapper
              tooltipValue="List settings"
              buttonClassName="view-active-name__option"
              buttonContent={<span className="button__ellipsis" />}
            >
              <ViewPopup setIsEditable={setIsEditable} />
            </PopupWrapper>

          </>
        )}
    </div>
  );
}

export default ViewActiveName;
