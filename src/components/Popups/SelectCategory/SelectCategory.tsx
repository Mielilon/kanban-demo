import React from 'react';
import { useDispatch } from 'react-redux';
import Radio from '../../Radio/Radio';
import Popup from '../Popup/Popup';
import './SelectCategory.sass';
import { useGetCategoriesQuery } from '../../../store/category/categoryApi';
import { changeTaskData } from '../../../store/task/taskSlice';

function SelectCategory(): React.ReactElement {
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetCategoriesQuery(4);
  const dispatch = useDispatch();
  const handleChange = (category: string) => {
    dispatch(changeTaskData({
      value: category,
      key: 'category',
    }));
  };
  return (
    <Popup title="Select category" titleSize="little">
      <input className="tags-search" type="text" name="" id="" placeholder="Search category..." />
      <ul className="dropdown-list dropdown-list--full-popup">
        {
        isCategoriesLoading
          ? 'Loading...'
          : categoriesData?.map((category) => (
            <Radio key={category.id} extraLabelClass="dropdown-item" name="category" id={`${category.id}`} onChange={() => handleChange(category.name)}>{category.name}</Radio>
          ))
        }
      </ul>
    </Popup>
  );
}

export default SelectCategory;
