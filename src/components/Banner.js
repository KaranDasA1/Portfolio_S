import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Computer Science Engineer " , "Data Analyst" ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    // Base speed of typing
    let baseSpeed = 200;
  
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    } else {
      // Add a small random delay to simulate natural typing
      setDelta(baseSpeed - Math.random() * 100);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      // Pause at the end of the word before starting to delete
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      // Pause at the start of the new word before typing
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  // Initial call to start the tick function
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => clearInterval(ticker);
  }, [text, delta]);
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi! I'm Karan Das A`}</h1>
                    <br />
                    
                    <span
                      className="txt-rotate"
                      dataPeriod="500"
                      data-rotate='["Web Developer", "Computer Science Engineer " , "Data Analyst" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  
                  <p>
                    Hello! I'm Karan Das A from Kerala, India. Currently I am
                    pursuing Bachelor's in Computer Science.
                  </p>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
             
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
