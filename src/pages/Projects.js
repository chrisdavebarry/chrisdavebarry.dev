import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './styles/Projects.css';


const projects = [
  {
    title: "chrisdavebarry.dev",
    description: "This website, my personal portfolio and blog website, was written using ReactJS and React-Bootstrap. See link for source code.",
    githubLink: "https://github.com/chrisdavebarry/chrisdavebarry.dev",
  },
  {
    title: "CommandLineTasks",
    description: "In the command line, the user can create, edit, and delete tasks that have a few properties such as priority, due date, and description. This app was written in C++ and uses a SQLite3 database. ",
    githubLink: "https://github.com/chrisdavebarry/CommandLineTasks",
  },
];


const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Col key={project.title} xs={12} className="mb-4">  {}
          <Card className="bg-light text-center">
            <Row>
              <Col xs={3} md={5} lg={5}>
                <Card.Body>
                  <Card.Title class="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.githubLink} target="_blank" rel="noreferrer noopener">
                    View on GitHub
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <hr/> {}
        </Col>
      ))}
    </div>
  );
};

export default Projects;
