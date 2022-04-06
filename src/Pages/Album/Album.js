import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Album.css';

const Album = ({ album }) => {
	const { img } = album;
	return (
		<Container className="blog-container">
			<Col>
				<Card className="blog">
					<Card.Img variant="top" src={img} className="blog-img" />
				</Card>
			</Col>
		</Container>
	);
};

export default Album;
