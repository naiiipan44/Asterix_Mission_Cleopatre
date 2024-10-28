// import { useState } from 'react'

import "./App.css";
import Card from "./Components/Card"
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/idefix.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/cleopatre.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/numerobis.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Astérix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/asterix.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Caius Antivirus",
		charOrigin: "romain",
		imgSrc: "./src/Images/caius-antivirus.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "./src/Images/cartapus.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Obélix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/obelix.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},
	{
		charName: "Amonbeaufils",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/amonbeaufils.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Panoramix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/panoramix.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},
];


function App() {

	return (
		<>
			<Header />
			<section>
				<Card characterList={char} />
			</section>
			<section>
				<Footer />
			</section>
		</>
	);

}

export default App;
