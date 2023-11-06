import React, { Link, useEffect, useState } from "react";
import { createDeck } from  '../utils/api';

function CreateDeck() {
    const [decks, setDecks] = useState([])
    useEffect (() => {
        createDeck()
        .then(data => setDecks(data))
    }, [])
    return <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <div>
            Create Deck
        </div>
         <form>
          <label>Name</label>
           <input type="text"></input>
          <label>Description</label>
           <textarea type="text" row={5}>
            Brief description of the deck
           </textarea>
         <button>Cancel </button>
         <button>Submit</button>

        </form>
    </div>
}


export default CreateDeck;

// export async function createDeck(deck, signal) {
//     const url = `${API_BASE_URL}/decks`;
//     const options = {
//       method: "POST",
//       headers,
//       body: JSON.stringify(stripCards(deck)),
//       signal,
//     };
//     return await fetchJson(url, options, {});
//   }