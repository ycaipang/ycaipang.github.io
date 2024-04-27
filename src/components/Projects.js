import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/NBI.png";
import projImg2 from "../assets/img/Appen.png";
import projImg3 from "../assets/img/FSC.png";
import projImg4 from "../assets/img/emanila.png";
import projImg5 from "../assets/img/FD.png";
import projImg6 from "../assets/img/FC.png";


export const Projects = () => {

  const projects = [
    {
      title: "Nippon Boehringer Ingelheim Co ., Ltd.",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://pro.boehringer-ingelheim.com/jp",
    },
    {
      title: "Forest Stewardship Council",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://fsc.org/en",
    },
    {
      title: "Appen",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://appen.com/#customers",
    },
    {
      title: "EManila",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://xd.adobe.com/view/1e3b39f8-1ba3-47c8-b6f6-1365080875d2-4b68/?fullscreen",
    },
    {
      title: "FlagDisplays",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "http://flagdisplays.com/",
    },
    {
      title: "FlagCity",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://darmee.dreamhosters.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My projects as a web developer highlight my expertise, creativity, and dedication. They demonstrate my ability to transform ideas into functional and visually captivating websites, leaving a lasting impact on clients and users alike.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
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
                <Tab.Pane eventKey="second">
                  <Row>
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
                <Tab.Pane eventKey="third">
                  <Row>
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
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
