import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
	return (
		<Container className=" about">
			<div className="text-center">
				<h1>ABOUT US</h1>
				<p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos,</p>
			</div>
			<div className="text-center">
				<h4>What We Stand For</h4>
				<p>We work everyday with values we don't compromise.</p>
			</div>
			<div className="text-center">
				<h4>Customer First.</h4>
				<p>BD Dine exists to serve. Everything we do impact thousands of people.</p>
			</div>
			<div className="text-center">
				<h4>Everyone Matters.</h4>
				<p>Anyone who is a part of the BD Dine family is valuable to us. No one is of any less important than someone else.</p>
			</div>
			<div className="text-center">
				<p>We want our people to be smart and driven but also be kind and have empathy for others.</p>
			</div>
			<div>
				<p>
					BD Dine , in Bangladesh, has been trying to make their Dines more accessible to the customers by both creating value and opening new stores across geographical area. From the beginning of their journey in Bangladesh in 2003, BD Dine Hut has opened 8 dine-in restaurants and 8 BD Dine Hut
					outlets from where the valued customers can get their BD Dines delivered. From our tantalizing appetizers to signature pan BD Dines, pastas, risottos and desserts, our menu has something for everyone. BD Dine Hut brand experience resonates generosity, friendships, naturalness and fun;
					making it stand for much more than the BD Dine.
				</p>
			</div>
		</Container>
	);
};

export default About;
