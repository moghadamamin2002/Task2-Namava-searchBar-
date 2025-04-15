import { createUseStyles } from 'react-jss';
const styleSearchBar = {
  searchBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'black',
    marginTop: '40px',
    paddingTop: '10px',
  },

  searchBarHeightContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    overflowY: 'auto',
    minWidth: '436px',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  searchBarContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    position: 'relative',
    width: '100%',
    height: '60px',
    backgroundColor: '#37383E',
    borderRadius: '5px',
  },

  searchBar: {
    width: '100%',
    height: '100%',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: '#37383E',
    border: '1px solid #37383E',
    color: '#FFFFFF',
    fontSize: '14px',
    borderRadius: '5px',

    '&::placeholder': {
      fontSize: '14px',
      color: '#AAAAAA',
      paddingRight: '10px',
    },
    '&:focus': {
      border: 'none',
      outline: 'none',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
    },
  },

  searchIMG: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
    pointerEvents: 'none',
  },

  cancelIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    zIndex: 1000,
  },

  grid: {
    // display: 'flex',
    // justifyContent: 'start',
    // alignItems: 'center',
    // flexDirection:"row",
    // gap: '16px',
    // flexWrap: 'wrap',
    // maxHeight: '500px',
    // width: '100%',
    // marginTop:"20px",
    // '@media(max-width:1280px)': {
    //   gap: '16px',
    //   width: '95%',
    // },
    // '@media(max-width:980px)': {
    //   gap: '10px',
    //   width: '95%',
    // },
    // '@media(max-width:900px)': {
    //   gap: '10px',
    //   width: '100%',
    // },
  },
};
export default createUseStyles(styleSearchBar);
