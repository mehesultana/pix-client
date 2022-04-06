import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Service = ({ service }) => {
	const { name, Price, Photographer, ShootingTime, Pictures } = service;
	return (
		<Container className="blog-container">
			<Col>
				<Card className="blog">
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<p>Price: {Price}</p>
						<Card.Text>Photographer: {Photographer}</Card.Text>
						<Card.Text>Shooting Time:{ShootingTime}</Card.Text>
						<Card.Text>Number of Pictures: {Pictures}</Card.Text>

						<a className="button4 text-decoration-none " href="mailto:sultanamehe01@gmail.com">
							Book Now
						</a>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Service;
