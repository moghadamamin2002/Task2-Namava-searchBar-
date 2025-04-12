import React from 'react';
import doSearch from './../../assets/img/do-search.png';
import useStyles from './EmptySearchPromptStyle';

const DoSearch = () => {
  const classStyle = useStyles();
  return (
    <>
      <div className={classStyle.container}>
        <img
          className={classStyle.doSearch}
          src={doSearch}
          alt="جست و جو کنید ."
        />
      </div>
    </>
  );
};

export default DoSearch;
