import React from 'react';
import Filter from '../../Filter/Filter';
import Popup from '../Popup/Popup';
import './FilterPopup.sass';
import Button from '../../Button/Button';

function FilterPopup(): React.ReactElement {
  return (
    <Popup title="Filters">
      <Filter />
      <div className="filters-control flex flex--justify-between">
        <Button iconType="plus" iconSize={10}>Add</Button>
        <Button iconType="close" iconSize={9}>Clear all</Button>
      </div>
    </Popup>
  );
}

export default FilterPopup;
