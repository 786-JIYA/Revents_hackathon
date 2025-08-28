import { AnimatePresence ,motion } from "motion/react";
import { cloneElement } from "react";
import { useOutlet,useLocation } from "react-router";


function AnimatedOutlets() {

  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode= "wait" initial={true} >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
       {element && cloneElement(element, { key: location.pathname })}
      </motion.div>
    </AnimatePresence>
  )
}
export
 default AnimatedOutlets