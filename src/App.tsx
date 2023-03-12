import './App.css'
import { Section } from './components'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef, useState } from 'react';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="">
      <motion.div
        className="fixed top-0 left-0 right-0 bg-red-600 h-2 origin-[0%] z-10"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Section className='bg-green-400'>
        Section 1
      </Section>
      <Section className='bg-gray-500'>
        Section 2
      </Section>
      <Section className='bg-yellow-500'>
        Section 3
      </Section>
      <Section className='bg-blue-500'>
        Section 4
      </Section>
    </div>
  )
}

function ViewPortSection({ id }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref)

  console.log(isInView, id);

  return (
    <div ref={ref} className="w-full h-screen">
      Section {id}
      <p>IsInView - {isInView}</p>
    </div>
  )
}


export default App
