import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';

import logo from '../../images/logo/Pix-logos_transparent.png';

import './Header.css';

const Header = () => {
	return (
		<>
			<div className="header">
				<Navbar sticky="top" collapseOnSelect expand="sm">
					<img to="/home" className="logo" src={logo} alt="" />
					<NavbarToggle />
					<Navbar.Collapse className="justify-content-end">
						<Link className="ms-3 home" to="/home">
							Home
						</Link>
						<Link className="ms-3 " to="/about">
							About Us
						</Link>
						<Link className="ms-3 " to="/album">
							Our Album
						</Link>
						<Link className="ms-3 " to="/services">
							Package
						</Link>
						<Link className="ms-3 " to="/blogs">
							Blogs
						</Link>

						<Link className="ms-3 " to="/contact">
							Contact
						</Link>
						{/* {user?.email ? (
							<Button onClick={logOut} variant="light">
								Logout
							</Button>
						) : (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						<br />
						<Navbar.Text>
							<Link to="/">{user?.displayName}</Link>
						</Navbar.Text> */}
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default Header;
