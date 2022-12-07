import React from 'react';
import Button from '../../Button/Button';
import Popup from '../Popup/Popup';
import './ChangeTooltipPopup.sass';

function ChangeTooltipPopup(): React.ReactElement {
  return (
    <Popup>
      <div className="settings">
        <input type="text" className="settings__title" value="settings title" />
        <Button
          className="settings__delete"
          onClick={() => {}}
          iconType="none"
        >
          Delete
        </Button>
        <div className="settings__colors">
          <Button
            className="settings__color"
            onClick={() => {}}
          >
            Setting Color
          </Button>
          <Button
            className="settings__color settings__color--active"
            onClick={() => {}}
          >
            Setting Color
          </Button>
        </div>
      </div>
    </Popup>
  );
}

export default ChangeTooltipPopup;
