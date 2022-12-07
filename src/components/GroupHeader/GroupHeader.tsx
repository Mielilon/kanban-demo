import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './GroupHeader.sass';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
import { changeGroupId } from '../../store/taskForm/taskFormSlice';

type GroupHeaderProps = {
  title: string,
  tasksNumber: number,
  groupId: number,
}

function GroupHeader({
  title,
  tasksNumber,
  groupId,
}: GroupHeaderProps): React.ReactElement {
  const dispatch = useDispatch();
  return (
    <Card type="header">
      <div className="card__group-name">{title}</div>
      <div className="card__tasks-number">{tasksNumber}</div>
      <PopupWrapper
        tooltipValue="Group settings"
        buttonClassName="card__option"
        buttonOnClick={() => dispatch(changeGroupId(groupId))}
        buttonContent={<span className="button__ellipsis" />}
      />
      <PopupWrapper
        tooltipValue="Add task"
        buttonClassName="button--only-icon"
        buttonIconType="plus"
        buttonOnClick={() => dispatch(changeGroupId(groupId))}
      />
    </Card>
  );
}

export default GroupHeader;
