import React from 'react';
import useStyles from './searchBarStyle';
import SEARCH from './../../assets/img/Search (1).svg';
import CANCELICON from './../../assets/img/cancel.png';

const SearchBar = () => {
  const classStyles = useStyles();

  return (
    <>
      <div className={classStyles.searchBody}>
        <div className={classStyles.searchBarHeightContainer}>
          <div className={classStyles.searchBarContainer}>
            <img
              className={classStyles.cancelIcon}
              src={CANCELICON}
              alt="جست و جو"
            />
            <input
              type="text"
              id="searchBarID"
              className={classStyles.searchBar}
              placeholder="فیلم،سریال،بازیگر و ژانر"
            />
            <img className={classStyles.searchIMG} src={SEARCH} alt="لغو" />
          </div>

          <div className={classStyles.grid}>
            {/* <Outlet
                context={{
                  query,
                }}
              /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
