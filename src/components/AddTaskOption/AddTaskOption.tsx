import React from 'react';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
import './AddTaskOption.sass';

type AddTaskOptionProps = {
  tooltipValue: string,
  iconType: string,
  iconSize: number,
  popupContent: React.ReactElement,

}

function AddTaskOption({
  tooltipValue, iconType, iconSize, popupContent,
}: AddTaskOptionProps): React.ReactElement {
  return (
    <div className="task-edit__option">
      <PopupWrapper
        buttonClassName="button--only-icon"
        buttonIconType={iconType}
        buttonIconSize={iconSize}
        tooltipValue={tooltipValue}
      >

        {popupContent}
      </PopupWrapper>
    </div>

  );
}

export default AddTaskOption;
