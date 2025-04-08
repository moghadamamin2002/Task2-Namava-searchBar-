import React from 'react';
import useStyles from './GridStyle';
import Card from '../card/Card';
import useMovies from '../../hooks/useMovie'; 

const Grid = () => {
  const classStyle = useStyles();
  const { movies } = useMovies("سلام", "all", 1); 

  return (
    <div className={classStyle.grid}>
      {movies.map((movie) => (
        <Card
          key={movie.id} 
          NAME={movie.name}
          IMAGE={movie.image_url}
        />
      ))}
    </div>
  );
};

export default Grid;
