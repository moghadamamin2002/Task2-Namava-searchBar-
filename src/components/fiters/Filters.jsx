import React from 'react';
import useStyles from './FiltersStyle';
import useQueryParams from '../../hooks/useQueryParams';

const Filters = () => {
  const classStyles = useStyles();
  const { type, updateType } = useQueryParams();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    updateType(value, checked);
  };

  return (
    <div className={classStyles.filters}>
      <div className={classStyles.filtersContainer}>
        <div className="filterUp">
          <div className="lableFilter">فیلترها</div>
        </div>
        <div className={classStyles.filterDown}>
          <div className={classStyles.film}>
            <input
              id="check-film"
              className={classStyles.checkBox}
              type="checkbox"
              value="movie"
              checked={type.includes('movie')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="check-film">فیلم</label>
          </div>
          <div className={classStyles.series}>
            <input
              id="check-series"
              className={classStyles.checkBox}
              type="checkbox"
              value="series"
              checked={type.includes('series')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="check-series">سریال</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
