// import { useState } from 'react'

// =======
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/idefix.jpg",
		description: "",
	},

	{
		charName: "Astérix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/asterix.jpg",
		description: "",
	},

	{
		charName: "Obélix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/obelix.jpg",
		description: "",
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
	},
];
// >>>>>>> 62251a923bb542b29de947b787d3f375c944b7e3

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
	// >>>>>>> 62251a923bb542b29de947b787d3f375c944b7e3
}

export default App;
