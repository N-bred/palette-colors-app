import sizes from './sizes';

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#000'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('md')]: {
      width: '70%'
    },
    [sizes.down('sm')]: {
      width: '90%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: '#fff',
    '& h1': {
      fontWeight: 'lighter'
    },
    margin: '1.5rem 0',
    [sizes.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '3.5rem',

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2,50%)',
      gridGap: '2rem'
    },
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(1,100%)',
      gridGap: '2.5rem',
      width: '60%',
      margin: '0 auto'
    }
  },
  link_new: {
    color: '#fff',
    fontWeight: 'lighter',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline'
    },
    [sizes.down('sm')]: {
      margin: '1rem 0'
    }
  },
  refillContainer: {
    height: '200px',
    position: 'fixed',
    top: '7.5%',
    left: '5%',
    [sizes.down('md')]: {
      top: '90%',
      left: '1%'
    },
    [sizes.down('sm')]: {
      display: 'none'
    }
  }
};

export default styles;
