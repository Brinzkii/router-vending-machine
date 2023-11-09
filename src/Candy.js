import React from 'react';
import { Link } from 'react-router-dom';
import './Candy.css';

function Candy() {
	return (
		<>
			<iframe
				src="https://giphy.com/embed/26BRwMuMYXHLgyjTi"
				className="Candy"
				title="candy"
				width="100%"
				height="600"
				frameBorder="0"
				allowFullScreen
			></iframe>

			<Link to="/" className="Candy-button">
				Go Back
			</Link>
		</>
	);
}

export default Candy;
