import { useState } from 'react'

import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/idefix.jpg",
		shortenedLegend: "tu mets ce que tu veux",
		fullLegend:
			"ksdjkadsfhbhdfasdf;lvih;daknfaldifhbkadjfglSLGNDKNVLDDLBZNDFKNLFNASNGWLGIHNL;FHBLNBLKBNlnlkdfbknadflid,arngl,zdnlidnbknljblzjdlgksm;dljfbgdnf., a.dnfg/.xnkcllzkdng,ndlcnldzjhcljzldkfgadfng.ldnflhid;glk",
	},

	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/cleopatre.jpg",
		shortenedLegend: "un autre texte",
		fullLegend: "more text",
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
	const [input, setInput] = useState<string>("");
	const handleChange = (event) => {
		console.log(input);
		setInput(event.target.value);
	};

	const [newOrigin, setNewOrigin] = useState<string>("");



	return (
		<>
			<Header />
			<section>
			<div id="filter-and-buttons">
				<div id="filter">
					<input
						onChange={handleChange}
						type="text"
						placeholder="Filtre les personnages !"
					/>
				</div>
				<div id="buttons">
					{char.map((elem,i) => (
						<button type="button" onClick={() => setNewOrigin() }>{elem.charOrigin}</button>	
					))}
					
					{/* <button type="button">Romain</button>
					<button type="button">Égyptien</button> */}
				</div>
			</div>
				<div className="charDiv">
				{char
					.filter((yourmom) => yourmom.charName.includes(input))
					.map((character) => (
					<div key={character.charName}>	
						<Card characterList={character} />
						
					</div>
					))}
			</div>
			</section>
			<section>
				<Footer />
			</section>
		</>
	);
}

export default App;
