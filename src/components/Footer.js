import { Container, Row } from "react-bootstrap";
import {MAilchimpForm} from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MAilchimpForm />
                    <div className="footer_block">
                        <div sm={6} className="footer_logo">
                            <img src={logo} alt="logo" width="100px"/>
                            <p>CopyRight 2023. All Right reserved  </p>
                        </div>
                        <div className="text-center text-sm-end">
                            <div className="social-icon">
                            <a href="https://www.linkedin.com/in/svetlanalytvyn/?locale=en_US"><img src={navIcon1} alt="link_Linkedin" /></a>
                            <a href="https://www.facebook.com/sveta.grineva"><img src={navIcon2} alt="link_facebook" /></a>
                            <a href="https://github.com/0trava"><img src={navIcon3} alt="link_github" /></a>
                            </div>
                            
                            
                        </div> 
                    </div>
                </Row>

            </Container>

        </footer>
    )
}