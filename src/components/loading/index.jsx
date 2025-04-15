import React from 'react';
import useStyles from './styles';
import LoadingIMG from "../../assets/img/Joker.png"

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
