import React from 'react'
import { motion } from 'framer-motion'

const First = () => {
  return (

         <>
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
    <motion.h1 
     initial={{opacity:0}}
     animate={{ x: 10 , opacity:1}}
     transition={{delay:6,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      P
     </motion.h1>
     <motion.h1 
     initial={{opacity:0}}
     animate={{ x: 20 , opacity:1}}
     transition={{delay:5,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      A
     </motion.h1>
     <motion.h1 
     initial={{opacity:0}}
     animate={{ x: 30 , opacity:1}}
     transition={{delay:4,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      N
     </motion.h1>
     <motion.h1 
     initial={{opacity:0}}
     animate={{ x: 40 , opacity:1}}
     transition={{delay:3,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      K
     </motion.h1>
     <motion.h1 
     initial={{opacity:0}}
     animate={{ x: 50 , opacity:1}}
     transition={{delay:2,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      A
     </motion.h1>
     <motion.h1 
     initial={{opacity:0}}
     animate={{ x:70 , opacity:1}}
     transition={{delay:1,duration:1}}
     className='text-blue-700 text-[25vw] bold' >
      J
     </motion.h1>
    </div>
    </>
    
  )
}

export default First