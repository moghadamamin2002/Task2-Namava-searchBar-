import React from 'react';
import useStyles from './CardStyle';
import LoadingIMG from "../../assets/img/ATT00002.htm"

const Loading = () => {
  const classStyle = useStyles();
  return (
    <>
      <div className={classStyle.card} >
        <img className={classStyle.poster} src={LoadingIMG} alt={Loading || 'فیلم'} />
        <p className={classStyle.titleMovie}>{}</p>
      </div>
    </>
  );
};

export default Loading;
