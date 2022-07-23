import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// COMPONENTS
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
	function loadFunctions() {
		console.log("in app.js");
	}

	useEffect(() => {
		loadFunctions();
	}, []);

	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Categories />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
			{/* {console.log("testing")} */}
		</BrowserRouter>
	);
}

export default App;
