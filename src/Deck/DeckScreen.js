import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import { readDeck,  deleteDeck, deleteCard  } from  '../utils/api';




function DeckScreen(){
    const {deckId} = useParams();
    const [deck, setDeck] = useState([])
    const history = useHistory()
    useEffect(()=>{
      
      const getData = async () => {
        try{
          const updatedDeck = await readDeck(deckId);
          setDeck(updatedDeck);
        } catch (error) {
          console.error("Error getting deck", error)
        }
      }
      
        getData();
    }, [deckId])
    // console.log(cardId)
    const handleDelete = async() => {
      const result = window.confirm("Delete this deck? \n \n You will not be able to recover this.");
      if (result) {
        await deleteDeck(deckId)
        history.push(`/`)
      }
    }
    const handleDeleteCard = async (cardId) => {
      const result = window.confirm("Delete this card? \n \n You will not be able to recover it.");
      if (result) {
        await deleteCard(cardId);
        const updatedDeck = await readDeck(deckId);
        setDeck(updatedDeck);
      } 
    }
    
    return (
    <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
          </ol>
        </nav>
        <div>
          <h5>{deck.name}</h5>
          <p>{deck.description}</p>
        </div>        
        <div className="d-flex justify-content-between">
        <div className="">
          <Link 
          to={`/decks/${deckId}/edit`} 
          className="btn btn-secondary mr-2"> Edit</Link>                   
          <Link 
          to={`/decks/${deckId}/study`} 
          className="btn btn-primary mr-2">Study</Link>
          <Link to={`/decks/${deckId}/cards/new`} 
          className="btn btn-primary">+Add Cards</Link>  
        </div>
        <div>
            <button 
            className=" btn btn-danger" 
            onClick={handleDelete}>&#128465;</button>
        </div>
        </div>
        <div>
          <h3>Cards</h3>
          {deck && deck.cards && (         
          <ul className="list-unstyled container">
           {deck.cards.map((card)=> (
            <div key={card.id} className="border">
             <li className="col-12">
            <div className="row">
              <div className="col-6">
               <p>{card.front}</p>
              </div>
              <div  className="col-6 ">
               <p>{card.back}</p>
               <div className="d-flex flex-row justify-content-end mb-2">
               <Link to={`/decks/${deckId}/cards/${card.id}/edit`} 
                className="col-3 btn btn-secondary mr-2">Edit</Link>
                <button  
                onClick={() => handleDeleteCard(card.id)}
                className="btn btn-danger ms-2">Delete</button>
               </div>
              </div>
            </div>
             </li>
            </div>
           ))}  
          </ul>
          )}
        </div>
              
        
    </div>    
    
)}


export default DeckScreen;


