import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Chips from './Chips';
import Soda from './Soda';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<VendingMachine />} />
					<Route path="/candy" element={<Candy />} />
					<Route path="/chips" element={<Chips />} />
					<Route path="/soda" element={<Soda />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
