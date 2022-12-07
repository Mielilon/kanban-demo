import React from 'react';
import Popup from '../Popup/Popup';
import Icon from '../../Icon/Icon';
import './GroupingPopup.sass';

const groupingData = [
  {
    name: 'Status',
    iconType: 'status',
    id: 1,
  },
  {
    name: 'Category',
    iconType: 'assignee',
    id: 2,
  },
  {
    name: 'Priority',
    iconType: 'transparent-flag',
    id: 3,
  },
  {
    name: 'Tags',
    iconType: 'tags',
    id: 4,
  },
  {
    name: 'Due date',
    iconType: 'calendar',
    id: 5,
  },
];
function GroupingPopup(): React.ReactElement {
  return (
    <Popup title="Group by:" titleSize="little">
      <ul className="dropdown-list dropdown-list--full-popup">
        {groupingData.map((item) => (
          <li className="dropdown-item" key={item.id}>
            <span className="dropdown-item__icon">
              <Icon type={item.iconType} />
            </span>
            {item.name}
          </li>
        ))}
      </ul>
    </Popup>
  );
}

export default GroupingPopup;
