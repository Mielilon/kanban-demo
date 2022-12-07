import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import './ModalWrapper.sass';

type ModalWrapperType = {
  children: React.ReactNode,
  className: string,
};

function ModalWrapper({ children, className }: ModalWrapperType): React.ReactElement {
  const { board: activeBoardId } = useParams();
  return (
    <div className="modal-wrapper">
      <div className={`modal ${className ? `modal--${className} ${className}` : ''}`}>
        <div className="modal__header">
          <Link to={`/${activeBoardId}`} className="modla__close">
            <Icon type="close" size={16} />
          </Link>
        </div>
        <div className="modal__main">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
