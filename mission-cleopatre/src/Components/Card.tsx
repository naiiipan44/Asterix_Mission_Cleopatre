import '..Style/Card.css'
interface charProps {
  characterList: TestcharacterList[];
  
  // charName: string,
  // imgSrc: string,
  // charOrigin: string,
  // description: string,
  }

function Card ({characterList} : charProps) {characterList.map((character) => {
      return(
<figure>
<img src={character.imgSrc} alt=`image de ${character.charName}` />
<figcaption>
<h2>{character.charName}</h2>
<h3>{character.charOrigin}</h3>
<p>{character.description}</p>
</figcaption>
</figure>
  )
}


export default Card