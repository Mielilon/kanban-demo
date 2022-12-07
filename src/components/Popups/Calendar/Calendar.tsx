import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { changeTaskData } from '../../../store/task/taskSlice';
import Popup from '../Popup/Popup';
import 'react-calendar/dist/Calendar.css';
import './Calendar.sass';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';

function CalendarStylized(): React.ReactElement {
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());
  const [isDueDate, setIsDueDate] = useState(true);
  const dispatch = useDispatch();
  const handleChangeCalendar = (value: Date) => {
    setCalendarValue(value);
    if (Array.isArray(value)) {
      dispatch(changeTaskData({
        value: dayjs(value[0]).format('DD/MM/YYYY'),
        key: 'startDate',
      }));
      dispatch(changeTaskData({
        value: dayjs(value[1]).format('DD/MM/YYYY'),
        key: 'dueDate',
      }));
    } else {
      dispatch(changeTaskData({
        value: dayjs(value).format('DD/MM/YYYY'),
        key: 'startDate',
      }));
    }
  };
  const hangleChange = () => {
    setIsDueDate((prev) => !prev);
    setCalendarValue(new Date());
    dispatch(changeTaskData({
      value: dayjs(calendarValue[0]).format('DD/MM/YYYY'),
      key: 'startDate',
    }));
    dispatch(changeTaskData({
      value: '',
      key: 'dueDate',
    }));
  };
  return (
    <Popup>
      <Calendar
        onChange={(value) => handleChangeCalendar(value)}
        value={calendarValue}
        locale="en"
        minDate={new Date()}
        selectRange={isDueDate}
      />
      <fieldset className="flex m-t-1 gap1">
        <Checkbox onChange={hangleChange} name="no-due-date" id="no-due-date">No due date</Checkbox>
      </fieldset>
    </Popup>
  );
}

export default CalendarStylized;
