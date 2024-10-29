import "../Style/Card.css";
import { useState } from "react";

interface charProps {
	characterList: {
		charName: string;
		imgSrc: string;
		charOrigin: string;
		shortenedLegend: string;
		fullLegend: string;
	};
}

function Card({ characterList }: charProps) {
	
	const [moreDetails, setMoreDetails] = useState(characterList.shortenedLegend);
	return (
		<>

      <figure key={characterList.charName}>
							<img src={characterList.imgSrc} alt={characterList.charName} />
							<figcaption>
								<h2>{characterList.charName}</h2>
								<h3>{characterList.charOrigin}</h3>
								<p>{moreDetails}</p>
								<button
									type="button"
									key={characterList.charName}
									onClick={() =>
										setMoreDetails(
											moreDetails === characterList.shortenedLegend
												? characterList.fullLegend
												: characterList.shortenedLegend,
										)
									}
								>
									Plus de détails !
								</button>
							</figcaption>
						</figure>
			
		</>
	);
}

export default Card;
