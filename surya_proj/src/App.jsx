import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ContentContext from './Context/ContentContext';
import Footer from './Components/Footer';
import ClanList from './Pages/ClanList/ClanList';

function App() {
	const language = useState("English");

	return (
		<ContentContext.Provider value={language}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/clanlist' element={<ClanList />} />
				{/* <Route path='/about' element={<ClanList />} /> */}
			</Routes>
			<Footer />
		</ContentContext.Provider>



	)
}

export default App
