import React from 'react';
import Button from '../../Button/Button';
import { priorities } from '../../../const';
import Popup from '../Popup/Popup';
import './PropertySettingsPopup.sass';

function PropertySettingsPopup(): React.ReactElement {
  return (
    <Popup>
      <input
        type="text"
        name=""
        id=""
        className="property-settings-input"
      />
      <div className="property-settings-color">
        <p className="property-settings-color__title">Colors</p>
        {priorities.map((priority) => (
          <div className="contaiter" key={priority}>
            <input
              type="radio"
              name="priority"
              id={priority}
              className="radio radio--priority"
            />
            <label
              htmlFor={priority}
              className={`radio-label priority-color priority-color--${priority} button`}
            >
              {priority}
            </label>
          </div>
        ))}
      </div>
      <Button
        onClick={() => {}}
        className="property-settings__delete"
        iconType="delete"
      >
        Delete
      </Button>
    </Popup>
  );
}

export default PropertySettingsPopup;
