import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import './styles/Projects.css';


const projects = [
  {
    title: "This Website",
    description: "This website was written using ReactJS and React-Bootstrap. See link for source code.",
    githubLink: "https://github.com/chrisdavebarry/chrisdavebarry.dev",
    imageUrl: "path/to/project-1.jpg", // Replace with your image path
  },
  {
    title: "Project Title 1",
    description: "A brief description of your project 1.",
    githubLink: "https://github.com/your-username/project-1",
    imageUrl: "path/to/project-1.jpg", // Replace with your image path
  },
  {
    title: "This Website",
    description: "This website was written using ReactJS and React-Bootstrap. See link for source code.",
    githubLink: "https://github.com/chrisdavebarry/chrisdavebarry.dev",
    imageUrl: "path/to/project-1.jpg", // Replace with your image path
  },
  {
    title: "Project Title 1",
    description: "A brief description of your project 1.",
    githubLink: "https://github.com/your-username/project-1",
    imageUrl: "path/to/project-1.jpg", // Replace with your image path
  },
];


const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Col key={project.title} xs={12} className="mb-4">  {}
          <Card className="custom-card-width bg-light">
            <Row>
              <Col xs={6} md={4}>
                <Image src={project.imageUrl} alt={project.title} fluid rounded />
              </Col>
              <Col xs={6} md={8}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.githubLink} target="_blank" rel="noreferrer noopener">
                    View on GitHub
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Projects;
