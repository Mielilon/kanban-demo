import { useState, useEffect, useRef } from 'react';

const useOutsideClick = () => {
  const [flag, setFlag] = useState(false);

  const popupWrapperRef = useRef<HTMLLIElement>(null);

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

  const changeVisibility = (e) => {
    e.stopPropagation();
    setFlag((prev) => !prev);
  };
  const isVisible = flag;
  return [popupWrapperRef, changeVisibility, isVisible];
};

export default useOutsideClick;
