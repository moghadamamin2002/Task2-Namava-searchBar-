import useStyles from './App';
import './App.css';
import Filters from './components/fiters/Filters';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchBar/SearchBar';

const App = () => {
  const classStyle = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classStyle.searchBarFiltersContainer}>
        <Filters />
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
