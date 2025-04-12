import { createUseStyles } from 'react-jss';
const styless = {
  checkBox: {
    appearance: 'none',
    width: '17px',
    height: '17px',
    margin: 'auto',
    border: '2px solid #666666',
    backgroundColor: '#37383E',
    accentColor: '#0C8CE9',
    borderRadius: '4px',
    cursor: 'pointer',
    // backgroundColor:"#37383E"
    '&:checked': {
      appearance: 'auto',
      borderRadius: '6px',
      accentColor: '#0C8CE9',
    },
  },
};

export default createUseStyles(styless);
