import React, { useEffect, useRef, useState } from 'react';

import Projects from './Projects';
import Contact from './Contact';

import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/hero2.png';

import TechFrontComp from '../components/TechFrontComp';
import TechBackComp from '../components/TechBackComp';

//icon
import { MdOutlineReadMore } from "react-icons/md";

// animate
import ScrollAnimation from '../animated/ScrollAnimation';
import TypingAnimate from '../animated/TypingAnimate';






const Home = () => {

    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        const page1 = page1Ref.current;
        const page2 = page2Ref.current;
        const page3 = page3Ref.current;
        const page4 = page4Ref.current;

        const scrollPosition = window.scrollY;

        const halfPage1 = page1.offsetHeight * 0.5;
        const halfPage2 = page2.offsetHeight * 0.5;
        const halfPage3 = page3.offsetHeight * 0.5;
        const halfPage4 = page4.offsetHeight * 0.5;

        if (scrollPosition >= halfPage3 + page2.offsetTop && scrollPosition < page3.offsetHeight + page3.offsetTop) {
            setTimeout(() => {
                page4Ref.current.scrollIntoView({ behavior: 'smooth' });
                setHasScrolled(true);
            }, 300);
        } else if (scrollPosition >= halfPage2 + page1.offsetTop && scrollPosition < page2.offsetHeight + page2.offsetTop) {
            setTimeout(() => {
                page3Ref.current.scrollIntoView({ behavior: 'smooth' });
                setHasScrolled(true);
            }, 300);
        } else if (scrollPosition >= halfPage1 && scrollPosition < page1.offsetHeight + page1.offsetTop) {
            setTimeout(() => {
                page2Ref.current.scrollIntoView({ behavior: 'smooth' });
                setHasScrolled(true);
            }, 300);
        } else if (scrollPosition < halfPage1) {
            setTimeout(() => {
                page1Ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setHasScrolled(false);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bounceInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 } },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.5 }}
    };

  return (

    <div id='home' className='home'>
        <header ref={page1Ref} className='w-100 min-vh-100 d-flex align-items-center'>
            <Container>
                <Row className='header-box d-flex align-items-center'>
                    <Col lg="6" className='hero-text'>
                        <ScrollAnimation animationVariants={bounceInLeft}>
                            <h1 className='fw-bold text-light'>
                                <TypingAnimate/>
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation animationVariants={bounceInLeft} delay={0.5}>
                            <h3 className='animate__animated animate__bounceInLeft animate__faster fs-3 fw-bold text-light'>I'm Reifal Hafizh Satria</h3>
                        </ScrollAnimation>
                        <ScrollAnimation animationVariants={bounceInLeft} delay={1}>
                            <p className='animate__animated animate__bounceInLeft animate__faster animate__delay-1s fw-medium text-light'>I am a student at Dian Nuswantoro University, I like anything related to programming, because coding is fun..!!</p>
                        </ScrollAnimation>
                        <a href="#about">
                        <button className='animate__animated animate__fadeInUp animate__faster btn btn-outline-light btn-medium fw-bold'> <MdOutlineReadMore /> Me More!</button>
                        </a>
                        
                    </Col>
                    <Col lg="6" className='animate__animated animate__fadeInUp animate__fast d-flex justify-content-center align-item-center'>
                        <img src={HeroImage} alt="hero-img" />
                    </Col>
                </Row>
            </Container>
        </header>


        <div ref={page2Ref} id='about' className="about w-100 min-vh-100">
            <Container className='pt-5'>
                <Row className='titAbout'>
                    <Col>
                        <h1 className=' text-center fw-bold text-light'>About Me</h1>
                    </Col>
                </Row>
                <Row className='about1 aboutTeks'>
                    <Col>
                        <ScrollAnimation animationVariants={fadeInLeft}>
                            <h3 className='fs-5 fw-bold mt-3'>Meet Me, Reifal Hafizh Satria</h3>
                        </ScrollAnimation>
                        <ScrollAnimation animationVariants={fadeInLeft} delay={0.3}>
                            <p className='fw-medium text-light'>As a full stack developer, I have expertise in developing applications from frontend to backend. I am skilled at designing responsive, engaging user interfaces, as well as managing server logic, databases, and APIs to ensure applications run smoothly and efficiently.</p>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row className='about1'>
                    <Col>
                        <ScrollAnimation animationVariants={fadeInLeft} delay={0.5}>
                            <h3 className='fs-5 fw-bold mt-3'>What technologies do I use?</h3>
                        </ScrollAnimation>
                        <ScrollAnimation animationVariants={fadeInLeft} delay={1}>
                            <p className='fw-medium text-light mb-0'>Frontend Development</p>
                            <TechFrontComp />
                        </ScrollAnimation>
                        <ScrollAnimation animationVariants={fadeInLeft} delay={1.2}>
                            <p className='fw-medium text-light mt-2 mb-0'>Backend Development</p>
                            <TechBackComp />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </div>

        <Projects ref={page3Ref}/>
        
        <Contact ref={page4Ref}/>
    </div>
  )
}

export default Home