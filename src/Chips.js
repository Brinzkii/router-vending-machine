import React from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';

function Chips() {
	return (
		<>
			<iframe
				src="https://giphy.com/embed/129fSchexp3aPC"
				className="Chips"
				title="chips"
				width="100%"
				height="600"
				frameBorder="0"
				allowFullScreen
			></iframe>

			<Link to="/" className="Chips-button">
				Go Back
			</Link>
		</>
	);
}

export default Chips;
