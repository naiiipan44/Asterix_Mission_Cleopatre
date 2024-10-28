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
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/cleopatre.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "César",
		charOrigin: "romain",
		imgSrc: "./src/Images/cesar.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/numerobis.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Astérix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/asterix.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Caius Antivirus",
		charOrigin: "romain",
		imgSrc: "./src/Images/caius-antivirus.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "./src/Images/cartapus.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Obélix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/obelix.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},
	{
		charName: "Amonbeaufils",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/amonbeaufils.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Panoramix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/panoramix.jpg",
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
