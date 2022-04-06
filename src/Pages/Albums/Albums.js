import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Album from '../Album/Album';
import './Albums.css';

const Albums = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		fetch(`album.json`)
			.then((res) => res.json())
			.then((data) => setAlbums(data));
	}, []);

	return (
		<Container className="albums">
			<div className="text-center">
				<h1>Take a look at our album</h1>
			</div>
			<div className="album-part">
				<Row xs={1} md={3} className="g-4 ">
					{albums.map((album) => (
						<Album key={album.id} album={album}></Album>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Albums;
