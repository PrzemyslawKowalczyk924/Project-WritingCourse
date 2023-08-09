import { motion } from 'framer-motion';

const CountUp = ({ max }) => {
    const transition = {
      duration: 1, // Czas trwania animacji
      ease: 'easeOut', // Easing funkcja animacji
    };
  
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }} // Stan początkowy elementu
        animate={{ opacity: 1, scale: 1 }} // Stan końcowy elementu po animacji
        transition={transition}
      >
        <motion.span
          initial={{ opacity: 0 }} // Stan początkowy dla cyfry
          animate={{ opacity: 1 }} // Stan końcowy dla cyfry po animacji
          transition={transition}
          style={{ display: 'inline-block', width: '1.5rem', textAlign: 'center' }}
        >
          {max}
        </motion.span>
      </motion.span>
    );
  };
  
  export default CountUp;