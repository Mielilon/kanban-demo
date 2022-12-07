import React from 'react';
import Icon from '../Icon/Icon';
import './Radio.sass';

type RadioProps = {
  extraRadioClass?: string,
  extraWrapperClass?: string,
  extraLabelClass?: string,
  iconType?: string,
  iconSize?: number,
  children?: React.ReactNode,
  onChange: () => void,
  name: string,
  id: string,
}

function Radio({
  extraRadioClass, extraWrapperClass, extraLabelClass,
  name, id, children, iconType, iconSize, onChange,
}: RadioProps): React.ReactElement {
  return (
    <li className={extraWrapperClass ? `radio-wrapper ${extraWrapperClass}` : 'radio-wrapper'}>
      <input
        type="radio"
        className={extraRadioClass ? `radio ${extraRadioClass}` : 'radio'}
        name={name}
        id={id}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={extraLabelClass ? `radio-label ${extraLabelClass}` : 'radio-label'}
      >
        {iconType && <Icon type={iconType} size={iconSize} />}
        {children}
      </label>
    </li>

  );
}

export default Radio;
