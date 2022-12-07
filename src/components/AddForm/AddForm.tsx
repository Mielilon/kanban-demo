import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddBoardMutation, useEditBoardMutation } from '../../store/board/boardApi';
import Button from '../Button/Button';
import './AddForm.sass';

type AddFormProps = {
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>,
  placeholder?: string,
  action: string
}

function AddForm({
  setIsEditable,
  placeholder,
  action,
}: AddFormProps): React.ReactElement {
  const [value, setValue] = useState('');
  const [addBoard] = useAddBoardMutation();
  const [editBoard] = useEditBoardMutation();
  const { board: activeBoardId } = useParams();
  const handleChangeField = (e) => {
    setValue(e.target.value);
  };

  const addFormActions = {
    addBoard: (e) => {
      e.preventDefault();
      addBoard({
        name: value || 'New board',
        status: '#BABBBD',
      }).unwrap();
      setIsEditable(false);
    },
    editBoard: (e) => {
      e.preventDefault();
      if (value === placeholder) return;
      editBoard({
        id: activeBoardId,
        name: value || placeholder,
      }).unwrap();
      setIsEditable(false);
    },
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 13) addFormActions[action](e);
      if (e.keyCode === 27) setIsEditable(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [value]);

  return (
    <form className="add-form flex">
      <input type="text" className="add-form__input" ref={inputRef} onChange={handleChangeField} value={value} placeholder={placeholder} />
      <Button className="add-form__button button--colored" onClick={addFormActions[action]} iconType="done" iconSize={14} />
      <Button onClick={() => setIsEditable(false)} iconType="close" iconSize={12} />
    </form>
  );
}

export default AddForm;
