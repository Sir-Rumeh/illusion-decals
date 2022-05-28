import React from "react";
import "./Grid.css";

function Grid() {
	// const featuredDesigns = document.querySelector(".grid-items");
	const featuredDetails = document.querySelector(".featured-design-details");

	// featuredDesigns.addEventListener("onMouseEnter", showDesignDetails());

	function showDesignDetails() {
		featuredDetails.classList.add("translate-featured-designs-details");
	}
	function hideDesignDetails() {
		featuredDetails.classList.remove(
			"translate-featured-designs-details"
		);
	}

	return (
		<div
			onMouseEnter={() => showDesignDetails}
			onMouseLeave={() => hideDesignDetails}
			className="grid-items"
		>
			<div className="featured-designs-details">
				<div className="flex">
					<h3>Category :</h3>
					<span>Anime</span>
				</div>
				<div className="flex">
					<h3>Device Type :</h3>
					<span>Laptop</span>
				</div>
			</div>
		</div>
	);
}

export default Grid;
