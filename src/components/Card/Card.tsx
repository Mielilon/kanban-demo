import React from 'react';
import './Card.sass';

type CardProps = {
  children: React.ReactNode,
  type: string,
}

function Card({ children, type }: CardProps): React.ReactElement {
  return (
    <div className={`card card--${type}`}>
      {children}
    </div>
  );
}

export default Card;
