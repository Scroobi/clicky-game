//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Lord of The Rings Clicky Game!</h1>
		<h2>Don't click on the same picture more than once. Click all 12 pics and you win the game!</h2>
	</header>
);

export default Jumbotron;