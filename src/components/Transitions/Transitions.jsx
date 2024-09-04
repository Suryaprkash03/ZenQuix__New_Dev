import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Transitions.css'; // Import your CSS file

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
      // If the user is visiting for the first time
      setShowTransition(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    } else {
      // User has visited before, no transition needed
      setShowTransition(false);
    }
  }, []);

  return (
    <>
      {showTransition && (
        <>
          <motion.div
            className="transition-overlay"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
          />
          <motion.div
            className="transition-overlay"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
          />
          <motion.div
            className="transition-overlay"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
          />
        </>
      )}
    </>
  );
};

export default Transition;
