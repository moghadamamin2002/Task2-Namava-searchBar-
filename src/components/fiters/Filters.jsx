import React from 'react';
import useStyles from './FiltersStyle';
const Filters = () => {
  const classStyles = useStyles();

  return (
    <>
      <div className={classStyles.filters}>
        <div className={classStyles.filtersContainer}>
          <div className="filterUp">
            <div className="lableFilter"> فیلترها</div>
          </div>
          <div className={classStyles.filterDown}>
            <div className={classStyles.film}>
              <input
                id="check-film"
                className={classStyles.checkBox}
                type="checkbox"
                
              />
              <label htmlFor="check-film">فیلم</label>
            </div>
            <div className={classStyles.series}>
              <input
                id="check-series"
                className={classStyles.checkBox}
                type="checkbox"
                
              />
              <label htmlFor="check-series">سریال</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
