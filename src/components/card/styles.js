import { createUseStyles } from 'react-jss';

const CardStyle = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '157px',
    height: '281px',
    '@media(max-width:1279px)': {
      width: '136px',
      height: '250px',
    },
  },
  poster: {
    width: '157px',
    height: '231px',
    borderRadius: '5px',
    '@media(max-width:1279px)': {
      width: '136px',
      height: '200px',
    },
  },
  titleMovie: {
    fontSize: '12px',
    color: '#FFFFFF',
    marginTop: '8px',
  },
};

export default createUseStyles(CardStyle);
