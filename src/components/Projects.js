import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.png";
import projImg8 from "../assets/img/project-img-8.png";
import projImg9 from "../assets/img/project-img-9.png";
import projImg10 from "../assets/img/project-img-10.png";
import { ProjectCard } from './ProjectCard';
import colorSharp from "../assets/img/color-sharp2.png";
import { useState } from 'react';





export const Projects = () => {




    const projects = [
        {
          title: "TagGame",
          description: "Design & Development",
          imgUrl: projImg1,
          link: "https://0trava.github.io/TagGame/",
          type: "Pet-project",
        },
        {
          title: "Miami",
          description: "Practic project",
          imgUrl: projImg2,
          link: "https://0trava.github.io/cool-gallery-miami/",
          type: "Practic work",
        },
        {
          title: "Natural Forest",
          description: "Practic project",
          imgUrl: projImg3,
          link: "https://0trava.github.io/Natural_Forest/",
          type: "Practic work",
        },
        {
          title: "Mimino",
          description: "Group project",
          imgUrl: projImg4,
          link: "https://gitdenlev.github.io/codeincalidor/",
          type: "Developer",
        },
        {
          title: "Barbershop",
          description: "Development",
          imgUrl: projImg5,
          link: "https://0trava.github.io/Barbershop/",
          type: "Developer",
        },
        {
          title: "Filmoteka",
          description: "Group project",
          imgUrl: projImg6,
          link: "https://0trava.github.io/Filmoteka_group-project/",
          type: "Developer",
        },
        {
          title: "WebStudio",
          description: "Development",
          imgUrl: projImg7,
          link: "https://0trava.github.io/goit-markup-hw-08/",
          type: "Developer",
        },
        {
          title: "Beautiful World",
          description: "Practic project",
          imgUrl: projImg8,
          link: "https://0trava.github.io/Beautiful-World/",
          type: "Practic work",
        },
        {
          title: "Creative Scroll",
          description: "Practic project",
          imgUrl: projImg9,
          link: "https://0trava.github.io/Site_CreativeScroll/",
          type: "Practic work",
        },
        {
          title: "Showcase-3d",
          description: "Practic project",
          imgUrl: projImg10,
          link: "https://0trava.github.io/showcase-3d-effect/",
          type: "Practic work",
        },


      ];

  const [projectList, setProjectList] = useState(projects);

  const changeProjectList = (e) => {
    const clickList = e.target.innerText;
    console.log(e.target.innerText);

    if (clickList) {
      if (clickList === "All") {

        return setProjectList(projects);
      }
      const result = projects.filter(project => project.type === clickList);
      console.log(result);
      setProjectList(result);
    }
  }

  // useEffect (() => {

  // }, changeProjectList)




  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                <h2>My Projects list</h2>
                <p>Everything starts with an idea, but good realization comes with good developer</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav onClick={changeProjectList} variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item >
                      <Nav.Link eventKey="all">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                      <Nav.Link eventKey="first">Developer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Practic work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  eventKey="third">Pet-project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                  <Tab.Pane eventKey="first">
                      <Row className='projects-row'>
                        {
                          projectList.map((project, index) => {
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
