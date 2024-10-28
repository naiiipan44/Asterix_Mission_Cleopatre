// import { useState } from 'react'
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "/Images/idefix.jpg",
		description: "",
	},

	{
		charName: "Astérix",
		charOrigin: "gaulois",
		imgSrc: "/Images/asterix.jpg",
		description: "",
	},

	{
		charName: "Obélix",
		charOrigin: "gaulois",
		imgSrc: "/Images/obelix.jpg",
		description: "",
	},
	{
		charName: "Panoramix",
		charOrigin: "gaulois",
		imgSrc: "/Images/panoramix.jpg",
		description: "",
	},
	{
		charName: "César",
		charOrigin: "romain",
		imgSrc: "/Images/cesar.jpg",
		description: "",
	},
	{
		charName: "Caius Antivirus",
		charOrigin: "romain",
		imgSrc: "/Images/caius-antivirus.jpg",
		description: "",
	},
	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "/Images/cartapus.jpg",
		description: "",
	},
	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "/Images/cleopatre.jpg",
		description: "",
	},
	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "/Images/numerobis.jpg",
		description: "",
	},
	{
		charName: "Amonbeaufils",
		charOrigin: "égyptien",
		imgSrc: "/Images/amonbeaufils.jpg",
		description: "",
	},
];

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<section>
				<Card />
			</section>
			<section>
				<Footer />
			</section>
		</>
	);
}

export default App;
