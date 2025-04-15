import useStyles from './AppStyle';
import './App.css';
import Filters from './components/Filters/index';
import Navbar from './components/Navbar';
import SearchBar from './components/searchBar';
import Grid from './components/Grid';

const App = () => {
  const classStyle = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classStyle.searchBarFiltersContainer}>
        <Filters className={classStyle.FiltersContainer} />
        <div className={classStyle.searchToShowResult}>
          <SearchBar className={classStyle.SearchBarStyle} />
          <Grid className={classStyle.gridStyle} />
        </div>
      </div>
    </div>
  );
};

export default App;
