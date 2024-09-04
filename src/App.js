import { AnimatePresence, motion } from 'framer-motion';
import "./App.css";
import Layout from './components/Layout';
import Transition from "./components/Transitions/Transitions";
function App() {
  return (
    <div className='app' >
      <Transition />
      <AnimatePresence mode="wait">
        <motion.div
          key="transition" // Ensure unique key to trigger exit/enter animations
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Layout />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default App;
