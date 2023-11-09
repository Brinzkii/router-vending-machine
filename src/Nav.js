import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
	return (
		<div className="Nav">
			<NavLink to="/candy" className="Nav-link">
				Candy
			</NavLink>
			<NavLink to="/chips" className="Nav-link">
				Chips
			</NavLink>
			<NavLink to="/soda" className="Nav-link">
				Soda
			</NavLink>
		</div>
	);
}

export default Nav;
