import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(`https://pix-photography.herokuapp.com/services`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<Container className="services">
			<div className="text-center">
				<h1>Our service packages</h1>
			</div>
			<div className="service-part">
				<Row xs={1} md={3} className="g-4 ">
					{services.map((service) => (
						<Service key={service._id} service={service}></Service>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Services;
