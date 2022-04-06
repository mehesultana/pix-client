import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { GrSend } from 'react-icons/gr';
import './Contact.css';

const Contact = () => {
	return (
		<Container id="contact">
			<div className="contactText ">
				<h3>Get In Touch</h3>
				<p>
					<i>
						Feel free to knock Pix. Our inbox is always open.
						<br /> Whether you have a question or just want to say hi, we’ll try my best to get back to you!
					</i>
				</p>
			</div>
			{/* contact  */}

			<Container className=" contact">
				<Row>
					<div className="col-md-3">
						<div className="contact-info">
							<Image src="https://image.ibb.co/kUASdV/contact-image.png" className="img-fluid " alt="Responsive image" />
							<h2>Contact </h2>
							<h5>We love to hear from you !</h5>
							<div className="social ">
								<p>Get connected with us on social networks:</p>
								<a href="https://github.com/mehesultana">
									<AiFillGithub className="ms-3 text-white" />
								</a>
								<a href="https://www.linkedin.com/in/sultanamehe/">
									<ImLinkedin className="ms-3 text-white" />
								</a>
								<a href="https://www.facebook.com/sultanamehe/">
									<ImFacebook2 className="ms-3 text-white" />
								</a>
								<a href="https://twitter.com/sultana_mehe">
									<ImTwitter className="ms-3 text-white" />
								</a>
								<a href="mailto:sultanamehe01@gmail.com">
									<ImMail className="ms-3 text-white" />
								</a>
							</div>
						</div>
					</div>
					<Container className="col-md-9">
						<Container className="contact-form">
							<div className="form-group">
								<label className="control-label col-sm-2" for="fname">
									First Name:
								</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="lname">
									Last Name:
								</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="email">
									Email:
								</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2" for="message">
									Message:
								</label>
								<div className="col-sm-10">
									<textarea className="form-control" rows="5" id="messaage"></textarea>
								</div>
							</div>
							<br />
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									<button type="submit" className="btn btn-default">
										Send <GrSend className="ms-3 text-white" />
									</button>
								</div>
							</div>
						</Container>
					</Container>
				</Row>
			</Container>
		</Container>
	);
};

export default Contact;
