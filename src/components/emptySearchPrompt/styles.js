import { createUseStyles } from 'react-jss';

const searchStyle = {
  DoSearch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '204px',
    marginTop: '150px',

    '@media(max-width:1280px)': {
      marginTop: '150px',
    },
  },

  container: {
    width: '100%',
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default createUseStyles(searchStyle);
