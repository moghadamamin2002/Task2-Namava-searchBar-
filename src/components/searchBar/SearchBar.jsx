import React from 'react';
import useStyles from './searchBarStyle';
import SEARCH from './../../assets/img/Search (1).svg';
import CANCELICON from './../../assets/img/cancel.png';
import Grid from '../grid/Grid';
import useClearableInput from '../../hooks/useClearableInput.';
import useQueryParams from '../../hooks/useQueryParams';

const SearchBar = () => {
  const classStyles = useStyles();
  const { query, updateQuery } = useQueryParams();
  const { ref, clearInput: clearInputHook } = useClearableInput();

  const handleInputChange = (event) => {
    updateQuery(event.target.value);
  };

  const clearInput = () => {
    updateQuery('');
    clearInputHook();
  };

  return (
    <div className={classStyles.searchBody}>
      <div className={classStyles.searchBarHeightContainer}>
        <div className={classStyles.searchBarContainer}>
          <img
            className={classStyles.cancelIcon}
            src={CANCELICON}
            alt="لغو"
            onClick={clearInput}
          />
          <input
            type="text"
            id="searchBarID"
            className={classStyles.searchBar}
            placeholder="فیلم،سریال،بازیگر و ژانر"
            ref={ref}
            value={query}
            onChange={handleInputChange}
          />
          <img className={classStyles.searchIMG} src={SEARCH} alt="جستجو" />
        </div>

        <div className={classStyles.grid}>
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
