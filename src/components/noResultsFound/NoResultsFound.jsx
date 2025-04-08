import React from 'react';
import noSearch from './../../assets/img/no-search.png';
import useStyles from "./NoResultsFoundStyle"


const NoSearch = () => {
  const classStyle = useStyles();
  return (
    <>
      <div className={classStyle.container}>
        <img className={classStyle.noSearch} src={noSearch} alt=" یافت نشد ." />
      </div>
    </>
  );
};

export default NoSearch;
