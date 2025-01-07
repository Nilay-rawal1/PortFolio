import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Agritech from "../../Assets/Projects/Agritech.png"
import BarCost from"../../Assets/Projects/barcost.png"
import Processing from "../../Assets/Projects/processing.jpeg"
import NewsNirnay from "../../Assets/Projects/newsnirnary.png"
import crowdsource from"../../Assets/Projects/crowdsource.png"
import ELA from "../../Assets/Projects/ela.png"
import NewzBuzz from"../../Assets/Projects/NewBuzz.png"
import diwali from "../../Assets/Projects/diwali.png"
import ocr from "../../Assets/Projects/Ocr.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocr}
              isBlog={false}
              title="Recognition of License Plates"
              description="Camera App for Automatic Recognition of License Plates. Capstone Project 2024-2025 . Team 261"
              ghLink="https://github.com/Nilay-rawal1/License-Plates-Recognition"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agritech}
              isBlog={false}
              title="Agritech"
              description="The vision of the Smart Agriculture System for Farmers near Bhopal project is to transform the region's agricultural landscape by harnessing cutting-edge technology. We aim to create a sustainable and prosperous agricultural ecosystem that leverages innovation to address the unique challenges faced by local farmers."
              ghLink="https://github.com/Nilay-rawal1/AgriTech/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diwali}
              isBlog={false}
              title="Diwali Sales Anaysis"
              description="This repository contains a detailed exploratory data analysis (EDA) of Diwali sales data. The primary goal of this project is to uncover key insights about customer behavior, sales trends, and factors influencing sales performance during the Diwali festival. This analysis is crucial for businesses to make data-driven decisions and optimize marketing strategies during the festive season."
              ghLink="https://github.com/Nilay-rawal1/Diwali-Sales-Analysis"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewzBuzz}
              isBlog={false}
              title="NewsBuzz"
              description="Innovated News Buzz, an innovative News Aggregator application designed to empower users by allowing them to 
select and personalize their news content based on their interests and preferences. Spearheaded the development of a News Aggregator website utilizing React JS, Express JS, NodeJS, and MongoDB. 
Engineered the platform to deliver personalized news content."
              ghLink="https://github.com/Nilay-rawal1/NewsBuzz"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Processing}
              isBlog={false}
              title="Image Processing"
              description="Project Baesed on Computer Vision and Image Processing . From changing the image Grayscale to Tracking Object & Object detection can be done using these Modules.
              It is complete Blend of Computer Vision and AI Models
              . "
            

              ghLink="https://github.com/Nilay-rawal1/Image-Processing"
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BarCost}
              isBlog={false}
              title="BarCost"
              description="A Price Tracking Website, Where you can track the price of your fav products and buy at right time when product cost is all time low. once you login you can add your product link"
              ghLink="https://github.com/Nilay-rawal1/Price-Tracker"
              demoLink="https://barcost.up.railway.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdsource}
              isBlog={false}
              title="Crowdsource VIT Bhopal"
              description="Crowdsource by Google ,VIT Bhopal Community,As Google Crowdsource Influncer, I have developed Website where people Can connect with community and get informed about new events "
              ghLink=" https://github.com/Google-Crowdsource-VIT-bhopal/Crowdsource-VIT-Bhopal"
              demoLink="https://google-crowdsource-vit-bhopal.github.io/Crowdsource-VIT-Bhopal/"
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ELA}
              isBlog={false}
              title="ELA VIT-Bhopal"
              description="As Techincal Lead of ELA Club VIT Bhopal .I have developed Website for the Club . Where People can meet Team of Ela and see the Prev. glimpes of Club what they have achived in past year"
              ghLink="https://github.com/ELA-VitBhopal/ELA-website"
              demoLink="https://ela-vitbhopal.github.io/ELA-website/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsNirnay}
              isBlog={false}
              title="NewsNirnay"
              description="NewsNirnay is currently under developement Project. It is Advance Fake New Detection website, Where you can check whether news is correct for not also you can report the same"
              ghLink="https://github.com/Nilay-rawal1/News-Nirnay"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
