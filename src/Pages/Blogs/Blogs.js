import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch(`https://pix-photography.herokuapp.com/blogs`)
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<Container className="blogs">
			<div className="text-center">
				<h1>Must Read Blogs</h1>
			</div>
			<div className="blog-part">
				<Row xs={1} md={3} className="g-4 ">
					{blogs.map((blog) => (
						<Blog key={blog.id} blog={blog}></Blog>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Blogs;
