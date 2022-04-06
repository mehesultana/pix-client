import React from 'react';
import { Container } from 'react-bootstrap';
import Ratings from '../Ratings/Ratings';
import './Middlepart.css';

const Middlepart = () => {
	return (
		<Container>
			<div className="">
				<div className="text-center text-white banner-image ">
					<h2 className="mt-5">WHY CHOOSE PIX PHOTOGRAPHY?</h2>
					<h5 className="mt-2">Check out what other awesome clients are saying </h5>
					<p>
						I am here to bring your amazing, dreamy visions to life! But really guys, that's what I'm all about.I want to connect with you! This is my calling and I want you to be apart of it! Let's set you apart from the crowd with incredible concept ideas a gorgeous scenery and the perfect mood!
					</p>
				</div>
			</div>
			<Ratings />
		</Container>
	);
};

export default Middlepart;
