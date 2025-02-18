'use client';
import * as motion from 'motion/react-client';
import {useScroll, useSpring} from 'motion/react';
export default function HeaderScroll() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='fixed top-64 grow'>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: 'gray'
        }}
      />
    </div>
  );
}
