import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { listDecks } from  '../utils/api';
import { Study } from '../Study'
// import { readDeck } from  '../utils/api';
// import {CreateDeck} from '../Deck';

// export async function readDeck(deckId, signal) {
//     const url = `${API_BASE_URL}/decks/${deckId}?_embed=cards`;
//     return await fetchJson(url, { signal }, {});
//   }


function Home() {
    const [decks, setDecks] = useState([])
    useEffect(() => {
        listDecks()       
        .then(data => setDecks(data))
        
    }, [])
    // const [cards, setCards] = useState([])
    // useEffect(()=>{
    //     readDeck()
    //     .then(data => setCards(data))
    // }, [])
    //fetch('....')
    return <div >
        <Link to="/decks/new"  class="btn btn-secondary">
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
                    <Link to={`/decks/:deckId/study`} class="col-2 btn btn-primary">Study</Link>
                    <Link to="" className="col-1 offset-7 btn btn-danger">&#128465;</Link>
                 </div>
            </div>
          ))}
        
    </div>
}


export default Home