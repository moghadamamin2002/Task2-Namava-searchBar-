import { createUseStyles } from 'react-jss';

const AppStyle = {
  searchBarFiltersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  SearchToMovie: {
    display: 'flex',
    flexDirection: 'column',
      width: '80%',
    
  },
  filtersContainer: {
    width: '20%',
  },
};
export default createUseStyles(AppStyle);
