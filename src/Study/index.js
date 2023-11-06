import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { readDeck } from  '../utils/api';

function Study() {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        readDeck()
        .then(data => setCards(data))
    }, [])
    
    return <div><nav aria-label="breadcrumb">
                 <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="">{cards.name}</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Study</li>
                 </ol>
                </nav>
            <h2>Study: {cards.name}</h2>
            <div className="container border">
                <div>
                    Card {cards.deckId.index} of {cards.deckId.length}
                </div>
                <div>
                 {cards.front}
                </div>
                <button className="col-2 btn btn-secondary">Flip</button>
            </div>

    </div>


}


export default Study;