import { createUseStyles } from 'react-jss';
import Loading from '../loading/Loading';
const GridStyle = {
  grid: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '16px',
    flexWrap: 'wrap',
    maxHeight: '500px',
    width: '100%',
    marginTop: '30px',
  },
  
};
export default createUseStyles(GridStyle);
