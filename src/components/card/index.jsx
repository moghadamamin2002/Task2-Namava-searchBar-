import React from 'react';
import useStyles from './styles';

const Card = ({ name, image }) => {
  const classStyle = useStyles();
  return (
    <>
      <div className={classStyle.card}>
        <img className={classStyle.poster} src={image} alt={name || 'فیلم'} />
        <p className={classStyle.titleMovie}>{name}</p>
      </div>
    </>
  );
};

export default Card;
