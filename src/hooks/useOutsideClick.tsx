import {
  useState, useEffect, useRef, MouseEvent,
} from 'react';

/**
 * Хук закрытия попапа нажатием за его пределы.
 *
 * @returns массив из трех значений: ref-а для установки ссылки на DOM-элемент попапа,
 * функции для установки состояния видимости попапа, булевого значение видимости
 */
const useOutsideClick = (): [React.MutableRefObject<HTMLDivElement | null>,
  (e: MouseEvent) => void, boolean] => {
  const [flag, setFlag] = useState(false);

  const popupWrapperRef = useRef<null | HTMLDivElement>(null);

  const changeFlag = (e: Event) => {
    const exceptions = [
      '.react-calendar__tile',
    ];

    if (
      !popupWrapperRef.current?.contains(e.target as HTMLElement)
      && !exceptions.some((selector) => (e.target as HTMLElement).closest(selector))
    ) {
      setFlag(false);
    }
  };

  useEffect(() => {
    if (flag) {
      document.addEventListener('click', changeFlag);
    }
    return () => document.removeEventListener('click', changeFlag);
  }, [flag]);

  const changeVisibility = (e: MouseEvent) => {
    e.stopPropagation();
    setFlag((prev) => !prev);
  };
  const isVisible = flag;
  return [popupWrapperRef, changeVisibility, isVisible];
};

export default useOutsideClick;
