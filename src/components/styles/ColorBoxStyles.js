import sizes from './sizes';

const styles = {
  ColorBox: {
    position: 'relative',
    cursor: 'pointer',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },

  ColorBoxBig: {
    height: '45%',
    [sizes.down('md')]: {
      height: 'calc(100%/5.6)'
    },
    [sizes.down('sm')]: {
      height: 'calc(100%/11.1)'
    }
  },

  seeMore: {
    textTransform: 'uppercase',
    padding: '1rem',
    position: 'absolute',
    fontSize: '1.2rem',
    bottom: '0',
    right: '0',
    background: 'rgba(255, 255, 255, 0.349)'
  },
  boxName: {
    textTransform: 'uppercase',
    padding: '1rem',
    position: 'absolute',
    fontSize: '1.2rem',
    bottom: '0',
    left: '0'
  },

  linkSeeMore: {
    textDecoration: 'none'
  },

  copyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '&:hover > button': {
      opacity: '1',
      pointerEvents: 'all'
    },
    [sizes.down('xs')]: {
      '&:hover > button': {
        opacity: '1',
        pointerEvents: 'none'
      }
    }
  },

  copyButton: {
    background: 'rgba(255, 255, 255, 0.4)',
    border: 'none',
    padding: '0.5rem 2rem',
    color: '#444',
    cursor: 'pointer',
    opacity: '0',
    transitionProperty: 'background, transform',
    transition: '0.3s ease',
    pointerEvents: 'none',
    borderRadius: '3px',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.6)',
      transform: 'translateY(-0.3rem)'
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      transform: 'translateY(-0.1rem)'
    }
  },
  goBackButton: {
    background: 'rgba(255, 255, 255, 0.4)',
    border: 'none',
    padding: '0.5rem 2rem',
    cursor: 'pointer',
    transitionProperty: 'background, transform',
    transition: '0.3s ease',
    borderRadius: '3px',
    textTransform: 'uppercase',
    color: '#fff',
    opacity: '1',
    pointerEvents: 'all',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.6)',
      transform: 'translateY(-0.3rem)'
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      transform: 'translateY(-0.1rem)'
    }
  },

  copyOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'transform 500ms ease-in',
    zIndex: '-1',
    transform: 'scale(1)',
    opacity: '0'
  },

  copyOverlayShow: {
    transform: 'scale(50)',
    zIndex: '10',
    display: 'block',
    opacity: '1'
  },

  copyMsg: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    flexDirection: 'column',
    zIndex: '-1',
    opacity: '0',
    transform: 'scale(0)',
    transition: 'transform 100ms ease 350ms',
    '& p': {
      fontSize: '1.1rem'
    }
  },

  copyMsgShow: {
    opacity: '1',
    zIndex: '20',
    transform: 'scale(5)',
    [sizes.down('md')]: {
      transform: 'scale(4)'
    },
    [sizes.down('sm')]: {
      transform: 'scale(3)'
    },
    [sizes.down('xs')]: {
      transform: 'scale(2)'
    }
  },

  textWhite: {
    color: '#fff'
  },

  textBlack: {
    color: '#444'
  }
};
export default styles;
