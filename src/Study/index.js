import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck, listDecks } from  '../utils/api';
// import  Layout  from '../Layout';


function Study( {decks} ) {
   const {deckId} = useParams();
   
   const [index, setIndex] = useState(0)
   const [ showBack, setShowBack ] = useState(false);
   const [cards, setCards] = useState([])
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setCards(data.cards))
    }, [deckId])

    const clickHandler = () => {
      setShowBack(!showBack);
    }

    const history = useHistory();

    const clickIncrement = () => {
      if(index < cards.length -1) {
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
    // It asks ("Restart Deck? \n\n Cancel wills end you home")  with clicking okay restarting and setting index to 0 (setIndex(0)) and when i click cancel it'll send them '/' Home (const history = useHistory     hisotry.push('/'))
    
    if(!cards[index] || !cards) {
        return <div>Loading...</div>
    }
    console.log(cards.length)
    
    
    return (
      <div>
        { cards.length >= 3 ? (
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="">{decks[deckId - 1].name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
              </ol>
            </nav>
            <h2>Study: {decks[deckId - 1].name}</h2>
            <div className="container border">
              <div>
                Card {index + 1} of {cards.length}
              </div>
              <div>
                {showBack ? cards[index].back : cards[index].front}
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
                <li className="breadcrumb-item"><Link to="">{decks[deckId - 1].name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
              </ol>
            </nav>
            <h2>{decks[deckId - 1].name}: Study</h2>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck</p>
            <button>+ Add Cards</button>
          </div>
        )}
      </div>
    );
}

export default Study;

{/* <div>
<nav aria-label="breadcrumb">
         <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="">{decks[index].name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Study</li>
         </ol>
        </nav>
    <h2>Study: {decks[index].name}</h2>
    <div className="container border">
        <div>
            Card {index+1} of {cards.length}
        </div>
        <div>
         {cards[index].back}
        </div>
        <button className="col-2 btn btn-secondary" >Flip</button>
        <button className="col-2 btn btn-primary" >Next</button>
    </div>
</div> */}

{/* <div>
        {cards.length ? (
          <React.Fragment>
            {cards.length < 2 ? (
              <React.Fragment>
                <h1>React Router: Study</h1>
                <h2>Not enough cards</h2>
                <p>
                  You need at least 3 cards to study. There are
                  {cards.length - 1} cards in this deck.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {showFront ? (


                  <React.Fragment>
                    <h1>{cards[index].front}</h1>
                    <button onClick={() => setShowFront(!showFront)}>
                      Flip
                    </button>
                    {index !== cards.length - 1 ? (
                      <button onClick={() => setIndex(index + 1)}>Next</button>
                    ) : null}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h1>{cards[index].back}back</h1>
                    {index !== cards.length - 1 ? (
                      <button
                        onClick={() => {
                          setIndex(index + 1);
                          setShowFront(!showFront);
                        }}
                      >
                        Next
                      </button>
                    ) : (
                      <button onClick={restartAlert}>Next</button>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        ) : null}
      </div> */}