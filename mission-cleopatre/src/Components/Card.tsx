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

 return(
  <>
    <input onChange={handleChange} type="text" placeholder='Filtre les personnages !'></input>
    <div className='charDiv'>
      {characterList.filter((yourmom) => (
        yourmom.charName.includes(input)
      )).map((character) => (
          <figure key={character.charName}>
            <img src={character.imgSrc} alt={character.charName} />
            <figcaption>
              <h2>{character.charName}</h2>
              <h3>{character.charOrigin}</h3>
              {/* <p>{character.description}</p> */}
            </figcaption>
          </figure>
		))}
  </div>
  </>

  )
}


export default Card;