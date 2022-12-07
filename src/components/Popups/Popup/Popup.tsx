import React from 'react';
import './Popup.sass';

interface PopupProps {
  children: React.ReactNode
  title?: string
  titleSize?: string
}

function Popup({
  children, title, titleSize,
}: PopupProps): React.ReactElement {
  return (
    <form className="popup">
      <div className="popup__content">
        {title ? (
          <div className={`popup__title popup__title--${titleSize}`}>
            {title}
          </div>
        ) : ''}
        {children}
      </div>
    </form>
  );
}

Popup.defaultProps = {
  title: false,
  titleSize: '',
};

export default Popup;
