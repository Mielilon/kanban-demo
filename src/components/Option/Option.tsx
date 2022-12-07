import React from 'react';
// import Button from '../Button/Button';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
// import useOutsideClick from '../../hooks/useOutsideClick';

interface OptionProps {
  option: {
    label: string,
    iconType: string,
    modalComponent: React.ReactElement,
  }
}

function Option({ option }: OptionProps): React.ReactElement {
  const { label, modalComponent, iconType } = option;

  return (
    <li className="option-list__item">
      <PopupWrapper buttonIconType={iconType} buttonContent={label}>
        {modalComponent}
      </PopupWrapper>
    </li>
  );
}

export default Option;
