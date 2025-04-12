import React from 'react';
import useStyles from './styles';

const Card = ({ NAME, IMAGE }) => {
  const classStyle = useStyles();
  return (
    <>
      <div className={classStyle.card}>
        <img className={classStyle.poster} src={IMAGE} alt={NAME || 'فیلم'} />
        <p className={classStyle.titleMovie}>{NAME}</p>
      </div>
    </>
  );
};

export default Card;
