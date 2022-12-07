import React from 'react';
import './SidebarToggleButton.sass';

function SidebarToggleButton(): React.ReactElement {
  return (
    <button type="button" className="sidebar-toggle-btn">
      <span className="sidevar-toggle-btn__icon" />
    </button>
  );
}

export default SidebarToggleButton;
