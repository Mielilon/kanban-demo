import React from 'react';
import Popup from '../Popup/Popup';
import Icon from '../../Icon/Icon';
import './SortingPopup.sass';

function SortingPopup(): React.ReactElement {
  const isActive = true;
  return (
    <Popup title="Sort by:" titleSize="little">
      <ul className="dropdown-list dropdown-list--full-popup">
        <li className="dropdown-item">
          <Icon type="ascending" />
          Status
          {isActive && (
          <span className="dropdown-item__status">
            (Ascending)
          </span>
          )}
        </li>
        <li className="dropdown-item">
          <Icon type="descending" />
          Task name
          {isActive && (
          <span className="dropdown-item__status">
            (Descending)
          </span>
          )}
        </li>
        <li className="dropdown-item">Some text</li>
      </ul>
    </Popup>
  );
}

export default SortingPopup;
