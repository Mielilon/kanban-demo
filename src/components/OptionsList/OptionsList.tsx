import React from 'react';
import Option from '../Option/Option';
import './OptionsList.sass';
import FilterPopup from '../Popups/FilterPopup/FilterPopup';
import SortingPopup from '../Popups/SortingPopup/SortingPopup';
import GroupingPopup from '../Popups/GroupingPopup/GroupingPopup';

function OptionsList(): React.ReactElement {
  const options = [
    {
      label: 'Filter',
      iconType: 'filter',
      modalComponent: <FilterPopup />,
    },
    {
      label: 'Sorting',
      iconType: 'sorting',
      modalComponent: <SortingPopup />,
    },
    {
      label: 'Group by',
      iconType: 'grouping',
      modalComponent: <GroupingPopup />,
    },
  ];
  return (
    <ul className="options-list">
      {options.map((option) => <Option option={option} key={option.label} />)}
    </ul>
  );
}

export default OptionsList;
