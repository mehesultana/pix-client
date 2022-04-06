import React from 'react';
import { Container } from 'react-bootstrap';
import notfound from '../../images/notfound.png';

const NotFound = () => {
	return (
		<Container className="text-center mt-5 notfound">
			<img src={notfound} alt="" />
		</Container>
	);
};

export default NotFound;
