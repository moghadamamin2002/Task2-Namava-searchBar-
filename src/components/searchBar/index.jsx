import React from 'react';
import useStyles from './styles';
import useClearableInput from '../../hooks/useClearableInput.';
import useQueryParams from '../../hooks/useQueryParams';
import SearchIcons from '../icons/SearchIcons';
import Cancel from '../icons/CancelIcon';

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
          <Cancel
            className={classStyles.cancelIcon}
            ref={ref}
            onClick={clearInput}
          />
          <input
            type="text"
            id="searchBarID"
            className={classStyles.searchBar}
            placeholder="فیلم ، سریال ، بازیگر و ژانر"
            ref={ref}
            value={query}
            onChange={handleInputChange}
          />

          <SearchIcons className={classStyles.searchIMG} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
