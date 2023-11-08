import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom'
import { listDecks, readDeck, deleteDeck } from  '../utils/api';
// import  Study  from '../Study';



// export async function readDeck(deckId, signal) {
//     const url = `${API_BASE_URL}/decks/${deckId}?_embed=cards`;
//     return await fetchJson(url, { signal }, {});
//   }


function Home() {
    const [decks, setDecks] = useState([])
    const {deckId} = useParams();
    const deck = decks.find((deck) => deck.id === Number(deckId))
    
    useEffect(() => {
        listDecks()       
        .then(data => setDecks(data))
        
    }, [])
    
    // const [cards, setCards] = useState([])
    // useEffect(()=>{
    //     readDeck(deckId)
    //     .then(data => setCards(data))
    // }, [])
    //fetch('....')
    
    
    const history = useHistory();

    const handleDelete = async() => {
      const result = window.confirm("Delete this deck?")
      if (result) {
        await deleteDeck(deck);
        history.push('/')
      }
    }
    return <div >
        <Link to="/decks/new"  className="btn btn-secondary">
           + Create Deck
        </Link>
          {decks.map((d) => (
            <div className="container border pt-2 pb-2" >
                <div >
                    <p>{d.name}</p>
                    {/* <p>{d.length}</p>
                    {console.log(d.length)} */}
                </div>
                <p className="pr-5">{d.description}</p>
                 <div>
                    <Link to="" className="col-2 btn btn-secondary"> View</Link>
                    {/*i need to import readDeck from ../api/index in order to get the card's deckId*/}
                    <Link to={`/decks/${d.id}/study`} class="col-2 btn btn-primary">Study</Link>
                    <button className="col-1 offset-7 btn btn-danger" onClick={handleDelete}>&#128465;</button>
                 </div>
            </div>
          ))}
    </div>
}

export default Home