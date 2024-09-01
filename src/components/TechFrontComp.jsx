import React from 'react'

import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";

const TechFrontComp = () => {
  return (
    <div className="techFront">
      <a href="https://react.dev/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><FaReact className='iTech'/> React</button>
      </a>
      <a href="https://nextjs.org/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><TbBrandNextjs className='iTech'/> Next.js</button>
      </a>
      <a href="https://flutter.dev/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><TbBrandFlutter className='iTech'/> Flutter</button>
      </a>
      <a href="https://getbootstrap.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><FaBootstrap className='iTech'/> Bootstrap</button>
      </a>
      <a href="https://tailwindcss.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><RiTailwindCssLine className='iTech'/> Tailwind CSS</button>
      </a>
      <a href="https://sass-lang.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><IoLogoSass className='iTech'/> Sass CSS</button>
      </a>
      <a href="https://www.framer.com/motion/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><SiFramer className='iTech'/> Framer Motion</button>
      </a>
    </div>
  )
}

export default TechFrontComp