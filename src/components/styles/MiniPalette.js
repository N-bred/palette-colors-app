const styles = {
   root: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
         cursor: 'pointer'
      }
   },

   colors: {
      backgroundColor: '#fff',
      height: '150px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '.2rem',
      borderRadius: '5px'
   },

   title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem',
      position: 'relative',
      fontSize: '1.6rem',
      fontWeight: 'normal'
   },
   emoji: {
      marginLeft: '1rem',
      fontSize: '1.5rem'
   },
   miniBox: {
      height: '25%',
      flex: '0 0 20%',
      position: 'relative'
   },
   delete: {
      position: 'absolute',
      top: '0',
      right: '0',
      zIndex: '50',
      fontSize: '3.5rem',
      backgroundColor: '#e11d23',
      color: '#fff',
      opacity: '0',
      transition: '.3s opacity ease-in',
      cursor: 'pointer'
   },
   paletteContainer: {
      position: 'relative',
      '&:hover svg': {
         opacity: '1'
      }
   }
};

export default styles;
