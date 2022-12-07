import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeAlert } from '../../store/alert/alertSlice';
import Button from '../Button/Button';
import './Alert.sass';

type AlertProps = {
  children: React.ReactNode,
  type: string,
  id: number,
}

function Alert({ children, type, id }: AlertProps) {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => {
    dispatch(removeAlert(id));
  };
  useEffect(() => {
    setIsHidden(true);
    setTimeout(() => dispatch(removeAlert(id)), 3500);
  });
  return (
    <div className={`alert ${type ? `alert--${type}` : ''} ${isHidden ? 'alert--hidden' : ''}`}>
      <p className="alert__content">
        {children}
      </p>
      <Button onClick={handleClick} iconType="close" className="button--only-icon" />
    </div>
  );
}

export default Alert;
