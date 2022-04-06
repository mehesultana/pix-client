import React from 'react';
import './Footer.css';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className=" text-center text-dark footer">
			<div className="container p-4 pb-0">
				<h6>Get Connected</h6>
				<a href="https://github.com/mehesultana">
					<AiFillGithub className="ms-3" />
				</a>
				<a href="https://www.linkedin.com/in/sultanamehe/">
					<ImLinkedin className="ms-3" />
				</a>
				<a href="https://www.facebook.com/sultanamehe/">
					<ImFacebook2 className="ms-3" />
				</a>
				<a href="https://twitter.com/sultana_mehe">
					<ImTwitter className="ms-3" />
				</a>
				<a href="mailto:sultanamehe01@gmail.com">
					<ImMail className="ms-3" />
				</a>
				<h6 className="text-center p-3">Copyright © 2021 - 2021 | Designed & Built by Sultana Mehe </h6>
			</div>
		</footer>
	);
};

export default Footer;
