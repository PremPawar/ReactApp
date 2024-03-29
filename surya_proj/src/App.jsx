import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ContentContext from './Context/ContentContext';
import FooterPage from './Components/Footer';
import ClanList from './Pages/ClanList/ClanList';
import ClanContext from './Context/ClanContext';

function App() {
	const language = useState("English");
	const NameClan = useState("Ahirrao");

	return (
		<ContentContext.Provider value={language}>
			<ClanContext.Provider value={NameClan}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/clanlist' element={<ClanList />} />
				{/* <Route path='/about' element={<ClanList />} /> */}
			</Routes>
			{/* <FooterPage /> */}
			</ClanContext.Provider>
		</ContentContext.Provider>



	)
}

export default App
