import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Albums from './Pages/Albums/Albums';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

import Services from './Pages/Services/Services';

function App() {
	return (
		<div>
			<div>
				<BrowserRouter>
					<Fragment>
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
						<Routes>
							<Route path="/home" element={<Home />} />
						</Routes>
						<Routes>
							<Route path="about" element={<About />} />
						</Routes>
						<Routes>
							<Route path="blogs" element={<Blogs />} />
						</Routes>
						<Routes>
							<Route path="album" element={<Albums />} />
						</Routes>
						<Routes>
							<Route path="services" element={<Services />} />
						</Routes>
						<Routes>
							<Route path="contact" element={<Contact />} />
						</Routes>
						<Routes>
							<Route element={<NotFound />} />
						</Routes>

						<Footer />
					</Fragment>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
