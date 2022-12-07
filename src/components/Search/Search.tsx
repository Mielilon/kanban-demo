import React from 'react';
import PopupWrapper from '../Popups/PopupWrapper/PopupWrapper';
import './Search.sass';

function Search(): React.ReactElement {
  return (
    <div className="search">
      <svg className="search__icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.53845 9.53848L12.3077 12.3077" stroke="#54575E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.07694 10.4616C8.49849 10.4616 10.4616 8.49849 10.4616 6.07694C10.4616 3.65538 8.49849 1.69232 6.07694 1.69232C3.65538 1.69232 1.69232 3.65538 1.69232 6.07694C1.69232 8.49849 3.65538 10.4616 6.07694 10.4616Z" stroke="#54575E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input className="search__field" type="search" name="" id="" placeholder="Поиск по задачам..." />
      <PopupWrapper
        tooltipValue="Search settings"
        buttonClassName="search__button search__button--settings"
        buttonIconType="search"
        buttonIconSize={17}
      />
    </div>
  );
}

export default Search;
