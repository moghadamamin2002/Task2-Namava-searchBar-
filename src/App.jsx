import useStyles from './AppStyle';
import './App.css';
import Filters from './components/fiters/Filters';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/SearchBar';
import Grid from './components/grid/Grid';

const App = () => {
  const classStyle = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classStyle.searchBarFiltersContainer}>
        <Filters className={classStyle.filtersContainer} />
        <div className={classStyle.SearchToMovie}>
          <SearchBar />
          <Grid/>
        </div>
        
      </div>
    </div>
  );
};

export default App;
