import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from '../../Icon/Icon';
import Popup from '../Popup/Popup';
import './ChangeTaskPriorityPopup.sass';
import { priorities } from '../../../const';
import { changeTaskData } from '../../../store/task/taskSlice';

function ChangeTaskPriorityPopup(): React.ReactElement {
  const dispatch = useDispatch();
  const handleChangePriority = (priority: string) => {
    if (priority) {
      dispatch(changeTaskData({
        value: priority,
        key: 'priority',
      }));
    } else {
      dispatch(changeTaskData({
        value: '',
        key: 'priority',
      }));
    }
  };
  return (
    <Popup title="Change priority" titleSize="little">
      {priorities.map((priority) => (
        <div className="contaiter" key={priority}>
          <input
            type="radio"
            name="priority"
            id={`task ${priority}`}
            className="radio"
            onChange={() => handleChangePriority(priority)}
          />
          <label
            htmlFor={`task ${priority}`}
            className={`radio-label priority-color priority-color--${priority} priority-color--icon button`}
          >
            <div
              className="label-icon-wrapper"
            >
              <Icon type="flag" size={12} />
            </div>
            {priority}
          </label>
        </div>
      ))}
    </Popup>
  );
}

export default ChangeTaskPriorityPopup;
