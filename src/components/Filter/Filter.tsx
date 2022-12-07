import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Filter.sass';
import dropdownData from '../../mocks/dropdowns';
import { onChangeDropdownType } from '../../types/dropdown';

function Filter(): React.ReactElement {
  const [form, setForm] = useState({ filter: 'Select filter', operator: 'is', option: 'Select option' });

  const handleInputChange = (e: onChangeDropdownType) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="filter">
      <Dropdown
        value={form.filter}
        name="filter"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
      <Dropdown
        value={form.operator}
        name="operator"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
      <Dropdown
        value={form.option}
        name="option"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
    </div>
  );
}

export default Filter;
