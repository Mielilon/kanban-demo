import React from 'react';
import { useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import './AlertWrapper.sass';

function AlertWrapper() {
  const alertList = useSelector((state) => state.alert);
  return (
    <div className="alert-wrapper">
      {alertList.map((alert) => (
        <Alert key={alert.id} type={alert.type} id={alert.id}>{alert.value}</Alert>
      ))}
    </div>
  );
}

export default AlertWrapper;
