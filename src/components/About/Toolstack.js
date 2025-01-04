import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiVirtualbox,
  SiKalilinux,
  SiWindows,
  SiWindowsterminal,
  SiPowerbi,
  SiTableau,
  SiMicrosoftoffice,
  SiGoogleanalytics,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiWindowsterminal/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col> 
     
    </Row>
  );
}

export default Toolstack;
