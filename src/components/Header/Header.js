import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";

function Header() {
	const [menuState, setMenuState] = useState(true);
	const [showCategories, setShowCategories] = useState(false);

	function toggleMenu() {
		const hamburgerMenu = document.querySelector(".hamburger-menu");

		const isShown = hamburgerMenu.classList.contains("show-menu");
		const categories = document.querySelector(".categories");
		const home = document.querySelector(".home");

		isShown ? hideMenu() : showMenu();
		function hideMenu() {
			hamburgerMenu.classList.remove("show-menu");
			console.log("hidden");
			setShowCategories(false);
			categories.classList.remove("show-categories");
		}
		function showMenu() {
			hamburgerMenu.classList.add("show-menu");
			console.log("shown");
			setMenuState((prevMenuState) => !prevMenuState);
			console.log(menuState);
			categories.classList.add("show-categories");
			setShowCategories(true);
		}
	}

	return (
		<header className="header">
			{/* START NAV MENU */}
			<nav className="navbar">
				<div className="logo">
					<a href="/">
						<img
							src={Logo}
							alt="Illusion Decals Product Catalog"
						/>
					</a>
					{showCategories ? (
						<div className="pick-categories mobile-none">
							<h1>Pick a Category</h1>
						</div>
					) : (
						<div className="pick-categories mobile-none">
							<h1>Featured Designs</h1>
						</div>
					)}
				</div>

				{/* START MAIN MENU */}
				<div className="main-menu mobile-none">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Latest</a>
						</li>
					</ul>
				</div>
				{/* END MAIN MENU */}
				{/* START HANBURGER MENU */}
				<div
					onClick={() => {
						toggleMenu();
					}}
					className="hamburger-menu"
					id="hamburger-menu"
				>
					{showCategories ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							className="close-categories"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<div className="burger"></div>
					)}
				</div>
				{/* END HANBURGER MENU */}
			</nav>
			{/* END NAV MENU */}
		</header>
	);
}

export default Header;
