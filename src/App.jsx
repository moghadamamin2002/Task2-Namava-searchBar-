import useStyles from './AppStyle';
import './App.css';
import Filters from './components/fiters/Filters';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchBar/index';
import Grid from './components/grid/Grid';

const App = () => {
  const classStyle = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classStyle.searchBarFiltersContainer}>
        <Filters className={classStyle.FiltersContainer}/>
        <div className={classStyle.searchToShowResult}>
          <SearchBar className={classStyle.SearchBarStyle} />
          <Grid className={classStyle.gridStyle} />
        </div>
      </div>
    </div>
  );
};

export default App;
