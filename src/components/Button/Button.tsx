import React from 'react';
import Icon from '../Icon/Icon';

type ButtonProps = {
  children?: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>,
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
  onFocus?: React.FocusEventHandler<HTMLButtonElement>,
  iconType?: string,
  isActive?: boolean,
  iconSize?: number,
  className?: string,
}

function Button({
  children, onClick, iconType = '', isActive = false, iconSize, className = '',
  onMouseEnter, onMouseLeave, onFocus,
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={`button ${isActive ? 'button--active' : ''} ${className}`}
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
    >
      {iconType ? <Icon type={iconType} size={iconSize} /> : ''}
      {children}
    </button>
  );
}

export default Button;
