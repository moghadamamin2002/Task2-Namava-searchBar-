import React from 'react';
import useStyles from './searchBarStyle';
import SEARCH from './../../assets/img/Search (1).svg';
import CANCELICON from './../../assets/img/cancel.png';
import Grid from '../grid/Grid';
import useClearableInput from '../../hooks/useClearableInput.';

const SearchBar = () => {
  const classStyles = useStyles();
  const { ref, clearInput } = useClearableInput();

  return (
    <>
      <div className={classStyles.searchBody}>
        <div className={classStyles.searchBarHeightContainer}>
          <div className={classStyles.searchBarContainer}>
            <img
              className={classStyles.cancelIcon}
              src={CANCELICON}
              alt="جست و جو"
              onClick={clearInput}
            />
            <input
              type="text"
              id="searchBarID"
              className={classStyles.searchBar}
              placeholder="فیلم،سریال،بازیگر و ژانر"
              ref={ref}
            />
            <img className={classStyles.searchIMG} src={SEARCH} alt="لغو" />
          </div>

          <div className={classStyles.grid}>
            <Grid />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
