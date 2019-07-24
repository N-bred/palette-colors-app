const styles = {
   root: {
      backgroundColor: '#5f34af',
      height: '100vh',
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
      flexWrap: 'wrap'
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      color: '#fff',
      '& h1': {
         fontWeight: 'lighter'
      },
      margin: '1.5rem 0'
   },
   palettes: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30%)',
      gridGap: '5%'
   },
   link_new: {
      color: '#fff',
      fontWeight: 'lighter',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
         textDecoration: 'underline'
      }
   }
};

export default styles;
