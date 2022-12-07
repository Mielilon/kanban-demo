import React from 'react';
import TextEditor from '../../Editor/Editor';
import Property from '../../Property/Property';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import './FullTask.sass';

function FullTask(): React.ReactElement {
  // Сделать получение задачи
  return (
    <ModalWrapper className="full-task">
      <input type="text" className="full-task__title" />
      <TextEditor />
      <Property />
    </ModalWrapper>
  );
}

export default FullTask;
