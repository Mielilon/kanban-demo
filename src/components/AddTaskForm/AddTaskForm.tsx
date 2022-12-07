import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import CalendarStylized from '../Popups/Calendar/Calendar';
import Card from '../Card/Card';
import './AddTaskForm.sass';
import Button from '../Button/Button';
import AddTaskOption from '../AddTaskOption/AddTaskOption';
import ChangeTaskPriorityPopup from '../Popups/ChangeTaskPriorityPopup/ChangeTaskPriorityPopup';
import { changeTaskData, clearTaskData } from '../../store/task/taskSlice';
import Icon from '../Icon/Icon';
import SelectCategory from '../Popups/SelectCategory/SelectCategory';
import { useAddTaskMutation } from '../../store/task/taskApi';
import { changeGroupId } from '../../store/taskForm/taskFormSlice';

type addTaskFormProps = {
  groupId: number,
}

const addTaskFormOptions = [
  {
    tooltipValue: 'Set flag',
    iconType: 'transparent-flag',
    iconSize: 13,
    popupContent: <ChangeTaskPriorityPopup />,
  },
  {
    tooltipValue: 'Set category',
    iconType: 'development',
    iconSize: 14,
    popupContent: <SelectCategory />,
  },
  {
    tooltipValue: 'Set date',
    iconType: 'due-date',
    iconSize: 14,
    popupContent: <CalendarStylized />,
  },
];

function AddTaskForm({ groupId }: addTaskFormProps): React.ReactElement {
  const { board: activeBoardId } = useParams();
  const addingTaskData = useSelector((state) => state.addTask);
  const dispatch = useDispatch();
  const [addTask] = useAddTaskMutation();
  const handleChangeField = (e) => {
    dispatch(changeTaskData({
      value: e.target.value,
      key: 'title',
    }));
  };
  const handleClear = (key: string) => {
    dispatch(changeTaskData({
      value: '',
      key,
    }));
  };
  const handleClearForm = () => {
    dispatch(clearTaskData());
    dispatch(changeGroupId(null));
  };
  const handleSave = () => {
    addTask({
      ...addingTaskData,
      title: addingTaskData.title || 'New task',
      category: addingTaskData.category || 'Other',
      board: Number(activeBoardId),
      status: groupId,
    });
    dispatch(clearTaskData());
    dispatch(changeGroupId(null));
  };

  return (
    <Card type="edit">
      <div className="task-edit flex flex--column">
        <div className="task-edit__category category">
          {addingTaskData.category
            ? (
              <>
                {addingTaskData.category}
                <Button onClick={() => handleClear('category')} iconType="close" iconSize={8} className="button--only-icon" />
              </>
            )
            : 'Category not selected'}
        </div>
        <textarea
          name="task-edit-value"
          id="task-edit-value"
          rows={1}
          placeholder="Enter the name of the task..."
          onChange={handleChangeField}
          value={addingTaskData.title}
        />
        {addingTaskData.priority
        && (
        <div className={`task-edit__priority priority priority--${addingTaskData.priority}`}>
          <Icon type="flag" />
          {addingTaskData.priority}
        </div>
        )}
        <div className="task-edit__deadline deadline">
          {addingTaskData.dueDate || addingTaskData.startDate
            ? (
              <>
                {addingTaskData.startDate || 'Today'}
                {' '}
                —
                {' '}
                {addingTaskData.dueDate || 'No due date'}
              </>
            )
            : 'No date'}
        </div>
        <div className="task-edit__controls-bar">
          <div className="task-edit__options">
            {addTaskFormOptions
              .map((option) => (
                <AddTaskOption
                  popupContent={option.popupContent}
                  tooltipValue={option.tooltipValue}
                  iconSize={option.iconSize}
                  iconType={option.iconType}
                  key={option.tooltipValue}
                />
              ))}
          </div>
          <Button onClick={handleClearForm} className="button--uppercase">Close</Button>
          <Button onClick={handleSave} className="button--uppercase button--colored">Save</Button>
        </div>
      </div>
    </Card>
  );
}

export default AddTaskForm;
