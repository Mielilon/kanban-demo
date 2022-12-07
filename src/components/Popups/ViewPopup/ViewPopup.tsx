import React from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { useDispatch } from 'react-redux';
import { useDeleteBoardMutation } from '../../../store/board/boardApi';
import { addAlert } from '../../../store/alert/alertSlice';
import Popup from '../Popup/Popup';
import Button from '../../Button/Button';
import './ViewPopup.sass';

function ViewPopup({ setIsEditable }): React.ReactElement {
  const clipboard = useClipboard();
  const dispatch = useDispatch();
  const [deleteBoard] = useDeleteBoardMutation();

  const viewPopupData = [
    {
      name: 'Rename',
      iconType: 'pen',
      handleClick: () => {
        setIsEditable(true);
      },
    },
    {
      name: 'Copy link',
      iconType: 'link',
      handleClick: () => {
        const id = Math.random();
        dispatch(addAlert({
          value: 'Link successfully copied!',
          type: 'success',
          id,
        }));
        return clipboard.copy();
      },
    },
    {
      name: 'Duplicate',
      action: 'duplicate',
      iconType: 'status',
      handleClick: () => {
        console.log('Duplicate');
      },
    },
    {
      name: 'Delete',
      action: 'delete',
      iconType: 'none',
      classNameWrapper: 'view-popup__item--delete',
      handleClick: () => {
        console.log('delete');
      },
    },
  ];

  return (
    <Popup>
      <input type="text" id="copy-link-field" readOnly className="hidden-field" ref={clipboard.target} value={document.location.href} />
      <ul className="dropdown-list dropdown-list--full-popup view-popup">
        {viewPopupData.map((viewPopup) => (
          <li
            className={`view-popup__item ${viewPopup.classNameWrapper ? viewPopup.classNameWrapper : ''}`}
            key={viewPopup.name}
          >
            <Button
              iconType={viewPopup.iconType}
              onClick={viewPopup.handleClick}
              className="button--full-width"
            >
              {viewPopup.name}
            </Button>
          </li>
        ))}
      </ul>
    </Popup>
  );
}

export default ViewPopup;
