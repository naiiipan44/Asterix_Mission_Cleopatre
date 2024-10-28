// import { useState } from 'react'


import "./App.css";
// import Card from "./Components/Card"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Header />
			<section>{/* <Card /> */}</section>
			<section>
				<Footer />
			</section>
		</>
	);
}

const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "/Images/idefix.jpg",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "César",
		charOrigin: "romain",
		imgSrc: "/Images/cesar.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "/Images/cleopatre.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "/Images/numerobis.jpg",
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
		imgSrc: "/Images/caius-antivirus.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},

	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "/Images/cartapus.jpg",
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
		charName: "Panoramix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/panoramix.jpg",
		description: "",
	},
	{
		charName: "César",
		charOrigin: "romain",
		imgSrc: "./src/Images/cesar.jpg",
		description: "",
	},
	{
		charName: "Caius Antivirus",
		charOrigin: "romain",
		imgSrc: "./src/Images/caius-antivirus.jpg",
		description: "",
	},
	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "./src/Images/cartapus.jpg",
		description: "",
	},
	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/cleopatre.jpg",
		description: "",
	},
	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/numerobis.jpg",
		description: "",
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
		imgSrc: "/Images/panoramix.jpg",
		description: "",
		shortenedLegend: "",
		fullLegend: "",
	},
];


function App() {
	// const [count, setCount] = useState(0)

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
