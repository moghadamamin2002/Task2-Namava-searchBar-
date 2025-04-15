import { createUseStyles } from 'react-jss';

const AppStyle = {
  searchBarFiltersContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5%',
  },
  searchToShowResult: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FiltersContainer: {
    width: '20%',
  },
  SearchBarStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '16px',
    flexWrap: 'wrap',
    maxHeight: '500px',

    marginTop: '20px',
    '@media(max-width:1280px)': {
      gap: '16px',
      width: '95%',
    },
    '@media(max-width:980px)': {
      gap: '10px',
      width: '95%',
    },
    '@media(max-width:900px)': {
      gap: '10px',
      width: '100%',
    },
  },
};
export default createUseStyles(AppStyle);
