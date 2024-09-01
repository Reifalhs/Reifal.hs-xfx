

import { Navbar, Container, Nav } from 'react-bootstrap'

import React, { useEffect, useState } from 'react';

import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";




const NavBar = () => {

  const [textColor, setTextColor] = useState('white');

    const handleScroll = () => {
        const section1 = document.getElementById('home');
        const section2 = document.getElementById('projects');
        const scrollPosition = window.scrollY;

        if (scrollPosition >= section2.offsetTop - 50) {
            setTextColor('black'); // Teks navbar berwarna hitam di Section 2
        } else {
            setTextColor('white'); // Teks navbar berwarna putih di Section 1
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='boxnav animate__animated animate__fadeInDown animate__faster'>
        <Navbar expand="lg" className=" navbar">
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold' style={{ color: textColor, textDecoration: 'none' }}>Reifal.hs-xfx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto text-end">
              <Nav.Link href="#home" style={{ color: textColor, textDecoration: 'none' }}>Home</Nav.Link>
              <Nav.Link href="#about" style={{ color: textColor, textDecoration: 'none' }}>About</Nav.Link>
              <Nav.Link href="#projects" style={{ color: textColor, textDecoration: 'none' }}>Project</Nav.Link>
              <Nav.Link href="#contact" style={{ color: textColor, textDecoration: 'none' }}>Contact</Nav.Link>
          </Nav>
          <div className="sosmed text-end">
            <a href="https://github.com/Reifalhs" style={{ color: textColor, textDecoration: 'none' }}><FaGithubSquare /></a>
            <a href="https://discord.gg/WSgDuBFW9V" style={{ color: textColor, textDecoration: 'none' }}><IoLogoDiscord /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar