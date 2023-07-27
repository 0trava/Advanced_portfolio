import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.png";
import { ProjectCard } from './ProjectCard';
import colorSharp from "../assets/img/color-sharp2.png";





export const Projects = () => {
    const projects = [
        {
          title: "TagGame",
          description: "Design & Development",
          imgUrl: projImg1,
          link: "https://0trava.github.io/TagGame/",
        },
        {
          title: "Miami",
          description: "Practic project",
          imgUrl: projImg2,
          link: "https://0trava.github.io/cool-gallery-miami/",
        },
        {
          title: "Natural Forest",
          description: "Practic project",
          imgUrl: projImg3,
          link: "https://0trava.github.io/Natural_Forest/",
        },
        {
          title: "Mimino",
          description: "Group project",
          imgUrl: projImg4,
          link: "https://gitdenlev.github.io/codeincalidor/",
        },
        {
          title: "Barbershop",
          description: "Development",
          imgUrl: projImg5,
          link: "https://0trava.github.io/Barbershop/",
        },
        {
          title: "Filmoteka",
          description: "Group project",
          imgUrl: projImg6,
          link: "https://0trava.github.io/Filmoteka_group-project/",
        },
        {
          title: "WebStudio",
          description: "Development",
          imgUrl: projImg7,
          link: "https://0trava.github.io/goit-markup-hw-08/",
        },


      ];

  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                <h2>My Projects list</h2>
                <p>Everything starts with an idea, but good realization comes with good developer</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                  <Tab.Pane eventKey="first">
                      <Row className='projects-row'>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Having a list of projects is a great way to show off your skills and abilities.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Always open to new projects and work.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                
                </Col>
            </Row>

        </Container>
        <img className='background-image-right' alt='background_image' src={colorSharp}/>

    </section>
  )
}
