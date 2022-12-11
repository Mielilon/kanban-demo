import React, {
  useState, useEffect, useRef,
} from 'react';
import ReactDOM from 'react-dom';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Button from '../../Button/Button';
import './PopupWrapper.sass';

type PopupWrapperProps = {
  children?: React.ReactNode
  buttonIconSize?: number
  buttonIconType?: string
  buttonClassName?: string
  buttonContent?: React.ReactNode | string
  tooltipValue?: string
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>
};

type PositionType = {
  left: number
  top: number
};

/**
 * Компонент обертки попапов.
 * Отвечает рендеринг попапа и тултипа, а также их позиционирование.
 *
 * @param props пропсы компонента
 * @param props.children попап или контент для попапа
 * @param props.buttonIconSize размер иконки для кнопки
 * @param props.buttonIconType тип иконки, который соответстует названию svg файла без расширения
 * @param props.buttonClassName дополнительный класс для кнопки
 * @param props.buttonContent контент кнопки
 * @param props.tooltipValue контент для тултипа
 * @param props.buttonOnClick функция обработчик события при нажатии на кнопку
 * @returns компонент-обертку для попапа со встроенным тултипом
 */
function PopupWrapper({
  children, buttonIconSize, buttonIconType,
  buttonClassName, buttonContent,
  tooltipValue, buttonOnClick,
}: PopupWrapperProps) {
  const [popupContentRef, changeVisibility, isVisible] = useOutsideClick();

  const popupWrapperRef = useRef<null | HTMLDivElement>(null);
  const tooltipRef = useRef<null | HTMLDivElement>(null);

  const popupRoot = document.getElementById('popup-root');

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState('top');
  const [contentWrapperStyle, setContentWrapperStyle] = useState<PositionType>({
    left: -9990,
    top: -9999,
  });
  const [tooltipStyle, setTooltipStyle] = useState<PositionType>({
    left: -9990,
    top: -9999,
  });

  useEffect(() => {
    if (!popupWrapperRef.current || !popupContentRef.current) return;

    const {
      top, left, height, width,
    } = popupWrapperRef.current.getBoundingClientRect();

    const {
      height: heightPopup,
      width: widthPopup,
    } = popupContentRef.current.getBoundingClientRect();

    if (widthPopup === 0) return;

    const maxPopupLeft = window.innerWidth - widthPopup - 12;
    const maxPopupTop = window.innerHeight - heightPopup - 12;

    /**
     * Позиционирование попапа относительно родительского элемента
     */
    setContentWrapperStyle({
      left: Math.max(Math.min(maxPopupLeft, left - (widthPopup / 2) + (width / 2)), 12),
      top: Math.max(Math.min(maxPopupTop, top + height), 12),
    });
  }, [isVisible]);

  useEffect(() => {
    if (!tooltipRef.current || !popupWrapperRef.current) return;

    const {
      height: heightTooltip,
      width: widthTooltip,
    } = tooltipRef.current.getBoundingClientRect();

    const {
      left, width, top,
    } = popupWrapperRef.current.getBoundingClientRect();
    const tooltipTopPosition = top - heightTooltip - 8;
    const tooltipBottomPosition = top + heightTooltip + 4;
    const minTooltipTop = heightTooltip + 8;

    /**
     * Позиционирование тултипа относительно родительского элемента
     */
    if (heightTooltip === 0) return;
    setTooltipStyle({
      left: left - (widthTooltip / 2) + (width / 2),
      top: tooltipTopPosition,
    });
    if (top < minTooltipTop) {
      setTooltipStyle({
        left: left - (widthTooltip / 2) + (width / 2),
        top: tooltipBottomPosition,
      });
      setTooltipPosition('bottom');
    }
  }, [isTooltipVisible]);

  const openTooltip = () => {
    if (!tooltipValue || isVisible) {
      setIsTooltipVisible(false);
      return;
    }
    setIsTooltipVisible(true);
  };
  const closeTooltip = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="popup-wrapper" ref={popupWrapperRef}>
      <Button
        onClick={buttonOnClick || ((e) => changeVisibility(e))}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={closeTooltip}
        iconSize={buttonIconSize}
        iconType={buttonIconType}
        className={buttonClassName}
        isActive={isVisible}
      >
        {buttonContent}
      </Button>
      <>
        {popupRoot && ReactDOM
          .createPortal(
            <div
              className={`bg-wrapper ${isVisible ? 'visible' : ''}`}
            >
              <div
                style={contentWrapperStyle}
                ref={popupContentRef}
                className="popup-content-wrapper"
              >
                {children}
              </div>
            </div>,
            popupRoot,
          )}
        {popupRoot
        && ReactDOM
          .createPortal(
            <div
              ref={tooltipRef}
              className={`tooltip ${isTooltipVisible ? 'visible' : ''} tooltip--${tooltipPosition}`}
              style={tooltipStyle}
            >
              {tooltipValue}
            </div>,
            popupRoot,
          )}

      </>
    </div>
  );
}

export default PopupWrapper;
