import React from 'react';
import OptionsBar from '../OptionsBar/OptionsBar';
import ControlsBar from '../ControlsBar/ControlsBar';

function Header(): React.ReactElement {
  return (
    <header className="header flex flex--column">
      <ControlsBar />
      <OptionsBar />
    </header>
  );
}

export default Header;
