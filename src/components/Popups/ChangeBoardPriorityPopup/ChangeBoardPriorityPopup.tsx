import React from 'react';
import { priorities } from '../../../const';
import { useEditBoardMutation } from '../../../store/board/boardApi';
import Popup from '../Popup/Popup';
import './ChangeBoardPriorityPopup.sass';

function ChangeBoardPriorityPopup({ setIsEditable, activeBoard }): React.ReactElement {
  const [editBoard] = useEditBoardMutation();

  const handleInputChange = (e, activeBoard, priorityName) => {
    if (activeBoard.priority === priorityName) return;
    editBoard({
      id: activeBoard.id,
      priority: priorityName,
    }).unwrap();
    setIsEditable(false);
  };
  return (
    <Popup title="Change priority" titleSize="little">
      {priorities.map((priority) => (
        <div className="contaiter" key={priority}>
          <input
            type="radio"
            name="priority"
            id={priority}
            className="radio radio--priority"
            onChange={(e) => handleInputChange(e, activeBoard, priority)}
            checked={activeBoard.priority === priority}
          />
          <label
            htmlFor={priority}
            className={`radio-label priority-color priority-color--${priority} button`}
          >
            {priority}
          </label>
        </div>
      ))}
    </Popup>
  );
}

export default ChangeBoardPriorityPopup;
