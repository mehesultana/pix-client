import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Rating = ({ rating }) => {
	const { packagename, name, description, rate } = rating;

	return (
		<Container className="rating-container">
			<Col>
				<Card className="rating">
					<Card.Body>
						<Card.Title className="text-center">Package Name : {packagename}</Card.Title>
						<h2 className="text-center">Rate :{rate}</h2>
						<Card.Text className="text-center">{description}</Card.Text>
						<p className="text-center">Name: {name}</p>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Rating;
