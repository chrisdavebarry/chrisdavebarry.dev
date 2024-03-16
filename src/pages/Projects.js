import React from 'react';
import './styles/Projects.css'; // Import the stylesheet
import { Col, Row, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <Col xs={12} className="mb-3" style={{ maxWidth: "600px" }}>
      <Card style={{ display: 'flex', flexDirection: 'row' }}>
        <CardImg variant="top" src={imageUrl} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <CardBody style={{ flex: 1, padding: '1rem' }}> {/* Added flex: 1 for even distribution */}
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button variant="primary" href={githubUrl} target="_blank" rel="noreferrer">
            View on GitHub
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default function Projects() {
  const projects = [
    {
      title: 'chrisdavebarry.dev',
      description: 'A personal portfolio website created using ReactJS & Bootstrap.',
      imageUrl: '/img/logo.png',
      githubUrl: 'https://github.com/chrisdavebarry/chrisdavebarry.dev',
    },
    {
      title: 'CommandLineTasks',
      description: 'A CLI task tracking app written in C++.',
      imageUrl: '/img/logo.png',
      githubUrl: 'https://github.com/chrisdavebarry/chrisdavebarry.dev',
    },
  {
      title: 'CommandLineTasks',
      description: 'A CLI task tracking app written in C++.',
      imageUrl: '/img/logo.png',
      githubUrl: 'https://github.com/chrisdavebarry/chrisdavebarry.dev',
    },  ];

  return (
    <div className="d-flex">
      <Row xs={1}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Row>
    </div>
  );
}