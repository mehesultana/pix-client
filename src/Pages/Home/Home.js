import React from 'react';
import { Accordion, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import cover from '../../images/cover.jpg';
import cover2 from '../../images/cover2.jpg';
import cover4 from '../../images/cover4.jpg';
import Middlepart from '../Middlepart/Middlepart';

const Home = () => {
	return (
		<Container>
			<Container>
				<div className="intro">
					<Row>
						<Col md={6}>
							<div className="intro-text">
								<h1>
									Welcome to,<span className="name">Pix</span> family.
								</h1>
								<h3>We capture your moment.</h3>
								<a className="button4 text-decoration-none " href="mailto:sultanamehe01@gmail.com">
									Book Now
								</a>
							</div>
						</Col>
						<Col md={6}>
							{/* <Image src={cover} className="img-fluid intro-img" alt="Responsive image" /> */}

							<Carousel>
								<Carousel.Item>
									<img className="d-block w-100" src={cover} alt="First slide" />
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src={cover2} alt="Second slide" />

									<Carousel.Caption></Carousel.Caption>
								</Carousel.Item>

								<Carousel.Item>
									<img className="d-block w-100" src={cover4} alt="Third slide" />
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</div>
			</Container>
			{/* FAQ */}

			<Container className="container my-5">
				<h1 className="text-center py-5">
					Frequently Asked <span className="different-color">Questions</span>
				</h1>
				<div className="row row-cols-1 row-cols-md-2 gx-5">
					<div className="col">
						<img className="w-50" src="https://cbr-honda.netlify.app/images/ask-que.png" alt="" />
					</div>

					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>How long will it take to get my photos?</Accordion.Header>
							<Accordion.Body>
								Your website isn’t a contract. It’s meant to provide information in a fun, friendly way. So you don’t need fancy language on your FAQs page. Let your photography FAQs be a client’s first introduction to your communication style by writing the way you talk.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What happens if you get sick or injured and can’t photograph me?</Accordion.Header>
							<Accordion.Body>
								Your website isn’t a contract. It’s meant to provide information in a fun, friendly way. So you don’t need fancy language on your FAQs page. Let your photography FAQs be a client’s first introduction to your communication style by writing the way you talk.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Do I get the copyright to my photos?</Accordion.Header>
							<Accordion.Body>
								Your website isn’t a contract. It’s meant to provide information in a fun, friendly way. So you don’t need fancy language on your FAQs page. Let your photography FAQs be a client’s first introduction to your communication style by writing the way you talk.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What if I need to reschedule?</Accordion.Header>
							<Accordion.Body>
								Your website isn’t a contract. It’s meant to provide information in a fun, friendly way. So you don’t need fancy language on your FAQs page. Let your photography FAQs be a client’s first introduction to your communication style by writing the way you talk.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>How many photos will I get?</Accordion.Header>
							<Accordion.Body>
								Your website isn’t a contract. It’s meant to provide information in a fun, friendly way. So you don’t need fancy language on your FAQs page. Let your photography FAQs be a client’s first introduction to your communication style by writing the way you talk.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</Container>
			<Middlepart />
			<Container className="my-5">
				<Row className="mx-auto">
					<div className="my-3 text-center">
						<h2>Our partners</h2>
					</div>
					<hr />
					<Col sm={12} md={6} lg={3} className="info mx-auto p-5">
						<Image src="https://i.ibb.co/M2gGRNn/download-4.jpg" className="img-fluid text-center partner  " alt="Responsive image" />
						<h4>Canon</h4>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
						<Image src="https://i.ibb.co/0qTvWzM/download-2.png" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>Sony</h4>
					</Col>

					<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
						<Image src="https://i.ibb.co/1mvtfqY/download-3.png" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>Nikon</h4>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  p-5  mx-auto ">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJbwIgSdKhfjuviFp8gMVixUsW8U2CC1Vkw&usqp=CAU" className="img-fluid text-center partner " alt="Responsive image " />
						<h4>Dronia</h4>
					</Col>
				</Row>
				<hr />
			</Container>
		</Container>
	);
};
export default Home;
