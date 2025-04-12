import { createUseStyles } from 'react-jss';

const navStyles = {
  nav: {
    color: '#FFFFFF',
    fontSize: '12px',
    '@media(max-width:800px)': {
      width: '800px',
    },
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    fontWeight: '400',
    marginRight: '42px',
    marginTop: '29px',
    '@media(max-width:1280px)': {
      gap: '18px',
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginLeft: '20px',
    marginTop: '20px',
    '@media(max-width:1280px)': {
      gap: '20px',
    },
  },
  navbarIcons: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    '@media(max-width:1280px)': {
      width: '30px',
      height: '30px',
    },
  },
  items: {
    cursor: 'pointer',
    '&:hover': {
      color: '#6EB8FF',
    },
  },
  logo: {
    cursor: 'pointer',
  },
  searchIcon: { backgroundColor: '' },
};

export default createUseStyles(navStyles);
