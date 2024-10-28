
import '../Style/Card.css'
interface charProps {
  characterList:{
    charName: string,
    imgSrc: string,
    charOrigin: string,
    description: string,
  }}

function Card ({characterList} : charProps) {
 return(
  <div className='charDiv'>
    {characterList.map((character) => (
			<figure key={character.charName}>
				<img src={character.imgSrc} alt={character.charName} />
				<figcaption>
					<h2>{character.charName}</h2>
					<h3>{character.charOrigin}</h3>
					<p>{character.description}</p>
				</figcaption>
			</figure>
		))}
  </div>

  )
}


export default Card