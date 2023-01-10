import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    wrapper: {
      padding: [20, 60],
      overflow: 'hidden',
      fontSize: 16,
      '@media (max-width: 1000px)': {
        padding: [0, 10]
      }
    },
    btnBack: {
      color: 'hsl(0, 0%, 52%)',
      display: 'inline-block',
      verticalAlign: 'top',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      marginBottom: 50,
      padding: [10, 20, 10, 50],
      position: 'relative',
      boxShadow: '0px 0px 2px 2px rgb(0, 0, 0, 0.08)',
      '& svg': {
        transform: 'scale(0.3)',
        position: 'absolute',
        top: -50,
        left: -90,
        fill: 'hsl(0, 0%, 52%)'
      }
    },
    holder: {
      display: 'flex',
      justifyContent: 'space-between',
      '@media (max-width: 1000px)': {
        display: 'block'
      }
    },
    column: {
      width: '45%',
      marginBottom: 20,
      '@media (max-width: 1000px)': {
        width: '100%'
      },
      '& h1': {
        marginBottom: 20
      }
    },
    info: {
      display: 'flex',
      '@media (max-width: 1000px)': {
        display: 'block'
      },
      marginBottom: 40,
      '& dl': {
        width: '45%',
        '@media (max-width: 1000px)': {
          width: '100%'
        }
      }
    },
    imageHolder: {
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: 'auto',
        verticalAlign: 'top'
      }
    },
    borderCountriesHolder: {
      '& dt': {
        '@media (max-width: 1000px)': {
          float: 'none'
        }
      },
      '& dd': {
        padding: 10
      }
    },
    loading: {
      padding: 40,
      textAlign: 'center',
      fontSize: 24
    },
    noResult: {
      padding: 40,
      textAlign: 'center',
      fontSize: 24
    }
  };
});
