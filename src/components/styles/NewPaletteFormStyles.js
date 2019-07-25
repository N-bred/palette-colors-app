import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

const windowWidth = window.innerWidth;

let drawerWidth;

if (windowWidth <= 575.98) {
  drawerWidth = 200;
} else if (windowWidth <= 991.98) {
  drawerWidth = 250;
} else {
  drawerWidth = 400;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  navBtns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',

    '& form': {
      display: 'flex',
      alignItems: 'center'
    },
    [sizes.down('sm')]: {
      justifyContent: 'space-evenly'
    },
    [sizes.down('xs')]: {
      '& > button': {
        padding: '.5rem 1rem'
      }
    }
  },
  toolbar: {
    width: '100%'
  },
  goBackBtn: {
    alignItems: 'center',
    margin: '0 1.5rem'
  },
  colorPickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '2rem 0',
    alignItems: 'center',
    [sizes.down('md')]: {
      flexDirection: 'column',
      '& > button': {
        margin: '.5rem 0'
      }
    }
  },
  colorPicker: {
    width: '90% !important',
    [sizes.down('sm')]: {
      width: '80% !important'
    }
  },
  colorPickerForm: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
    flexDirection: 'column',

    '& label': {
      fontSize: '1.4rem'
    },
    [sizes.down('sm')]: {
      width: '80%'
    }
  },
  navTitle: {
    [sizes.down('sm')]: {
      display: 'none'
    }
  },
  modalInput: {
    '& label': {
      fontSize: '1.4rem'
    }
  },
  modalTitle: {
    '& h2': {
      fontSize: '1.9rem'
    }
  },
  drawerTitle: {
    [sizes.down('md')]: {
      fontSize: '2.3rem'
    },
    [sizes.down('sm')]: {
      fontSize: '1.8rem'
    }
  }
}));

export default useStyles;
