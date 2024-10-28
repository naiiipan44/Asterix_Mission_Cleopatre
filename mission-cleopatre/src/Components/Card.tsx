import '../Style/Card.css'
import { useState } from 'react'

interface charProps {
  characterList:{
    charName: string,
    imgSrc: string,
    charOrigin: string,
    shortenedLegend: string,
		fullLegend: string
  }}

function Card ({characterList} : charProps) {

  const [input, setInput] = useState<string>("");
  const handleChange = (event) => {
    console.log(input);
    setInput(event.target.value);
  }

  const [moreDetails, setMoreDetails] = useState(characterList.shortenedLegend);



 return(
  <>
    <div id="filter-and-buttons">
      <div id="filter">
        <input onChange={handleChange} type="text" placeholder='Filtre les personnages !'></input></div>
      <div id="buttons">
          <button type="button" >Gaulois</button>
          <button type="button" >Romain</button>
          <button type="button" >Égyptien</button>
      </div>
    </div>
    
    <div className='charDiv'>
      {characterList.filter((yourmom) => (
        yourmom.charName.includes(input)
      )).map((character) => (
          <figure key={character.charName}>
            <img src={character.imgSrc} alt={character.charName} />
            <figcaption>
              <h2>{character.charName}</h2>
              <h3>{character.charOrigin}</h3>
              <p>{character.description}</p>
              <p>{moreDetails}</p>
          <button type="button" onClick={() => (
            setMoreDetails(moreDetails === character.shortenedLegend ? character.fullLegend : character.shortenedLegend)
            )}>Plus de détails !</button>
            </figcaption>
          </figure>
		))}
  </div>
  </>

  )
}


export default Card;