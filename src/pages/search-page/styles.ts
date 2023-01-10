import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    main: {
      padding: [0, 27],
      transition: 'opacity 2s',
      '@media (max-width: 767px)': {
        padding: [0, 10]
      },
      '&.loading': {
        opacity: 0.5
      }
    },
    filtersHolder: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 40,
      padding: [0, 40],
      '@media (max-width: 1000px)': {
        display: 'block'
      },
      '@media (max-width: 767px)': {
        padding: 0
      },
      '& .filter-select': {
        width: 300,
        '@media (max-width: 1000px)': {
          width: '70%'
        }
      }
    },
    searchInputHolder: {
      display: 'flex',
      justifyContent: 'center',
      background: '#fff',
      width: 400,
      padding: [0, 10, 0, 30],
      boxShadow: '0px 0px 2px 2px rgb(0, 0, 0, 0.08)',
      position: 'relative',
      '@media (max-width: 1000px)': {
        width: '100%',
        marginBottom: 20
      },
      '& svg': {
        fill: 'hsl(0, 0%, 52%)',
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translate(-50%, -50%)',
        width: 15,
        height: 15
      },
      '& input': {
        outline: 'none',
        fontSize: 14,
        lineHeight: '20px',
        height: 40,
        width: '100%',
        color: 'hsl(0, 0%, 52%)',
        background: 'none',
        border: 'none',
        padding: 10,
        overflow: 'hidden'
      }
    },
    searchResultsContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    searchItem: {
      width: '25%',
      marginBottom: 40,
      paddingRight: 40,
      paddingLeft: 40,
      display: 'flex',
      '@media (max-width: 1200px)': {
        width: '50%'
      },
      '@media (max-width: 767px)': {
        width: '100%',
        paddingRight: 0,
        paddingLeft: 0,
        marginBottom: 20
      },
      '& .search-result-item': {
        cursor: 'pointer',
        background: 'hsl(0, 0%, 100%)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 20
      },
      '& h2': {
        fontSize: 18,
        lineHeight: '20px',
        marginBottom: 25,
        display: 'inline-block',
        verticalAlign: 'top'
      },
      '& .image-holder': {
        margin: [-20, -20, 20],
        height: 150,

        '& img': {
          width: '100%',
          height: '100%',
          display: 'block'
        }
      }
    },
    noResults: {
      textAlign: 'center',
      padding: 40
    }
  };
});
