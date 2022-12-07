import React from 'react';

type IconProps = {
  type: string,
  size?: number,
}

function Icon({ type, size }: IconProps) {
  const Svg = require(`./assets/${type}.svg`).default;

  let attributes: {} | {width: number, height: number} = {};

  if (size) {
    attributes = {
      width: size,
      height: size,
    };
  }

  return (
    <Svg
      {...attributes}
    />
  );
}

export default Icon;
