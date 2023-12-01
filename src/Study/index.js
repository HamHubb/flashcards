import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck } from  '../utils/api';



function Study() {
   const {deckId} = useParams();
   
   const [index, setIndex] = useState(0)
   const [ showBack, setShowBack ] = useState(false);
   const [deck, setDeck] = useState(null)
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setDeck(data))
    }, [deckId])
// console.log(deck)
    const clickHandler = () => {
      setShowBack(!showBack);
    }

    const history = useHistory();

    const clickIncrement = () => {
      if(index < deck.cards.length -1) {
        setIndex(index + 1);
        setShowBack(false);
      } else {
        const shouldRestart = window.confirm("Restart Deck? \n \n  Click 'cancel' to return to the home page");
        if(shouldRestart) {
          setIndex(0);
          setShowBack(false);
        } else {
          history.push('/');
        }
      }
    }
    
    if(!deck) {
        return <div>Loading...</div>
    }
    // console.log(deck.cards.length)
    
    
    return (
      <div>
        { deck.cards.length >= 3 ? (
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="">{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
              </ol>
            </nav>
            <h2>Study: {deck.name}</h2>
            <div className="container border">
              <div>
                Card {index + 1} of {deck.cards.length}
              </div>
              <div>
                {showBack ? deck.cards[index].back : deck.cards[index].front}
              </div>
              <button className="col-2 btn btn-secondary" onClick={clickHandler}>
                Flip
              </button>
              {showBack && (
                <button className="col-2 btn btn-primary" onClick={clickIncrement}>
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="">{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
              </ol>
            </nav>
            <h2>{deck.name}: Study</h2>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {deck.length} cards in this deck</p>
            <Link to={`/decks/${deckId}/cards/new`} 
          className="btn btn-primary">+Add Cards</Link>
          </div>
        )}
      </div>
    );
}

export default Study;