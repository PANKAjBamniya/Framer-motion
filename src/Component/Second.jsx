// App.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Second = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="app-container">
      <motion.div
        className="box"
        animate={{ 
          scale: isOpen ? 1.5 : 1, 
          rotate: isOpen ? 180 : 0 
        }}
        transition={{ duration: 0.5 }}
        onClick={toggleOpen}
      >
        Click Me
      </motion.div>
    </div>
  );
};

export default Second;
