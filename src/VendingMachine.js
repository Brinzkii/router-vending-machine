import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function VendingMachine() {
	return (
		<div className="VendingMachine">
			<h1 className="VendingMachine-header">Vending Machine</h1>
			<Link className="VendingMachine-button" to="/candy">
				Candy
			</Link>
			<Link className="VendingMachine-button" to="/chips">
				Chips
			</Link>
			<Link className="VendingMachine-button" to="/soda">
				Soda
			</Link>
		</div>
	);
}

export default VendingMachine;
