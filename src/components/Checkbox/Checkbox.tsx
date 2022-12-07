import React from 'react';
import './Checkbox.sass';

type CheckboxProps = {
  extraCheckboxClass?: string,
  extraWrapperClass?: string,
  extraLabelClass?: string,
  name: string,
  id: string,
  onChange: () => void
  children?: React.ReactNode,
}

function Checkbox({
  extraCheckboxClass, extraWrapperClass, extraLabelClass, name, id, children,
  onChange,
}: CheckboxProps): React.ReactElement {
  return (
    <div className={extraWrapperClass ? `checkbox-wrapper ${extraWrapperClass}` : 'checkbox-wrapper'}>
      <input
        type="checkbox"
        className={extraCheckboxClass ? `checkbox ${extraCheckboxClass}` : 'checkbox'}
        name={name}
        id={id}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={extraLabelClass ? `checkbox-label ${extraLabelClass}` : 'checkbox-label'}
      >
        {children}
      </label>
    </div>

  );
}

export default Checkbox;
