// import { useState } from 'react'
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
