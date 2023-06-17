import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import VisibilitySensor from "react-visibility-sensor";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>My drive for continuous learning and staying updated with the latest industry trends keeps me at the forefront of web development. I embrace new technologies, frameworks, and tools, constantly seeking opportunities for self-improvement and professional growth.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 100 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                    }}
                  </VisibilitySensor>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 100 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 90 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 70 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 90 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Drupal</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>AJAX</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 90 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 3
                          })}
                        />
                      );
                      }}
                  </VisibilitySensor>
                  <h5>SEO</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
