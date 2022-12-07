import React from 'react';
import Button from '../Button/Button';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
import PropertySettingsPopup from '../Popups/PropertySettingsPopup/PropertySettingsPopup';
import './Property.sass';

function Property(): React.ReactElement {
  const type = 'tags';
  return (
    <div className="property property--active">
      <p className="property__title">Tags:</p>
      {/* ниже у нас или теги или селект/приоритет или дата (нужно условие)

        данные принимаются через пропсы */}
      <div className="property-position">
        <div className="property-wrapper active">
          <div className={`property__selected property__selected--${type}`}>
            <span className="tag">
              Orange
              <Button
                onClick={() => {}}
                iconSize={8}
                iconType="close"
                className="button--only-icon"
              />
            </span>
            <span className="tag">
              Green
              <Button
                onClick={() => {}}
                iconSize={8}
                iconType="close"
                className="button--only-icon"
              />
            </span>
            <span className="tag">
              Apple
              <Button
                onClick={() => {}}
                iconSize={8}
                iconType="close"
                className="button--only-icon"
              />
            </span>
            <span className="tag">
              Green
              <Button
                onClick={() => {}}
                iconSize={8}
                iconType="close"
                className="button--only-icon"
              />
            </span>
            <span className="tag">
              Green
              <Button
                onClick={() => {}}
                iconSize={8}
                iconType="close"
                className="button--only-icon"
              />
            </span>
            <input type="text" name="" id="" className="property__field" />
          </div>
          <div className="property__dropdown-wrapper">
            <div className="property__dropdown-title">Select tag</div>
            <ul className="property__dropdown">
              <li className="property__dropdown-item">
                <div className="property__dropdown-button">
                  <span className="tag">Tagname</span>
                </div>
                <PopupWrapper
                  buttonContent={<span className="button__ellipsis" />}
                  buttonClassName="button--only-icon"
                >
                  {/* Ниже в попап должны передаваться настройки
                попапа в том числе с наличием тех или иных данных */}
                  <PropertySettingsPopup />
                </PopupWrapper>
              </li>
              <li className="property__dropdown-item">
                <div className="property__dropdown-button">
                  <span className="tag">Tagname</span>
                </div>
                <PopupWrapper
                  buttonContent={<span className="button__ellipsis" />}
                  buttonClassName="button--only-icon"
                >
                  {/* Ниже в попап должны передаваться настройки
                попапа в том числе с наличием тех или иных данных */}
                  <PropertySettingsPopup />
                </PopupWrapper>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
