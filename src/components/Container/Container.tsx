import React from 'react';
import './Container.sass';

type ContainerProps = {
  children: React.ReactNode,
  classWrapper: string,
  contentLayout: string,
}

function Container({ children, classWrapper, contentLayout }: ContainerProps): React.ReactElement {
  return (
    <div className={classWrapper}>
      <div className="container">
        <div className={`content ${contentLayout}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Container;
