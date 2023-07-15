import { Navbar, Container, Nav, } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { HashLink } from 'react-router-hash-link';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

    }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav hidden">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('home')}>
                    Home
                </Nav.Link>

                <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('skills')}>
                    Skills
                </Nav.Link>

                <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('projects')}>
                    Projects
                </Nav.Link>

            </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/svetlanalytvyn/?locale=en_US"><img src={navIcon1} alt="link_Linkedin" /></a>
                        <a href="https://www.facebook.com/sveta.grineva"><img src={navIcon2} alt="link_facebook" /></a>
                        <a href="https://github.com/0trava"><img src={navIcon3} alt="link_github" /></a>
                    </div>

                        <button className="vvd"><span>Let’s Connect</span></button>

                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

