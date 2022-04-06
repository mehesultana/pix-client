import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const Ratings = () => {
	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		fetch(`https://pix-photography.herokuapp.com/ratings`)
			.then((res) => res.json())
			.then((data) => setRatings(data));
	}, []);

	return (
		<Container>
			<Row xs={1} md={3} className="g-4 ">
				{ratings.map((rating) => (
					<Rating key={rating._id} rating={rating}></Rating>
				))}
			</Row>
		</Container>
	);
};

export default Ratings;
