import React from 'react'

import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const TechBackComp = () => {
  return (
    <div className="techFront">
      <a href="https://expressjs.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><SiExpress className='iTech'/> Express</button>
      </a>
      <a href="https://nodejs.org/en">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><FaNodeJs className='iTech'/> Node.js</button>
      </a>
      <a href="https://codeigniter.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><DiCodeigniter className='iTech'/> Codeigniter</button>
      </a>
      <a href="https://laravel.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><FaLaravel className='iTech'/> Laravel</button>
      </a>
      <a href="https://www.mysql.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><GrMysql className='iTech'/> MySQL</button>
      </a>
      <a href="https://www.mongodb.com/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><SiMongodb className='iTech'/> MongoDB</button>
      </a>
      <a href="https://www.postgresql.org/">
        <button className='btn btn-outline-light btn-sm justify-contect-center'><SiPostgresql className='iTech'/> PostgreSQL</button>
      </a>
    </div>
  )
}

export default TechBackComp