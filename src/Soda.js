import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css';

function Soda() {
	return (
		<>
			<iframe
				src="https://giphy.com/embed/WZso7qaenNBrW"
				className="Soda"
				frameBorder={0}
				width="100%"
				height="600"
				title="soda"
			></iframe>

			<Link to="/" className="Soda-button">
				Go Back
			</Link>
		</>
	);
}

export default Soda;
