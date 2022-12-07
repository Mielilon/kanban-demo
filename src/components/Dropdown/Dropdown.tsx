import React from 'react';
import { DropdownItemType, onChangeDropdownType } from '../../types/dropdown';

import Icon from '../Icon/Icon';
import './Dropdown.sass';

type DropdownProps = {
  data: {
    defaultValue: DropdownItemType,
    dropdownItems: DropdownItemType[]
  },
  type: string,
  value: string,
  onChange: (syntheticEvent: onChangeDropdownType) => void,
  name: string,
}

function Dropdown({
  data, type, value, onChange, name,
}: DropdownProps): React.ReactElement {
  const { dropdownItems } = data;

  return (
    <details className={`dropdown dropdown--${type}`}>
      <summary className="dropdown__value">{value}</summary>
      <ul className="dropdown-list popup">
        {dropdownItems.map((item) => (
          <li
            className="dropdown-item"
            key={item.name}
            onClick={() => {
              onChange({ target: { value: item.name, name } });
            }}
          >
            {item.icon && (
            <span className="dropdown-item__icon" style={{ color: item.icon.color }}>
              <Icon type={item.icon.type} />
            </span>
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default Dropdown;
