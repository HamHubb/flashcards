import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { listDecks, deleteDeck } from  '../utils/api';



function Home() {
    const [decks, setDecks] = useState([]);
    useEffect(() => {
        listDecks()       
        .then(setDecks)
        
    }, [])
    
    const handleDelete = async(deckId) => {
      const result = window.confirm("Delete this deck? \n \n You will not be able to recover this.")
      if (result) {
        await deleteDeck(deckId)  
        window.location.reload();
      }
    }
    
    return <div >
    <Link to="/decks/new"  className="btn btn-secondary mb-2">
     + Create Deck
    </Link>
      {decks.map((d) => (
       <div key={d.id} className="container border pt-2 pb-2" >
         <div className="row ">
          <div className="col-8 d-flex">
           <p>{d.name}</p>
          </div>
          <div className="col-4 d-flex justify-content-end">
           <p>{d.cards.length} cards</p>
          </div>
        </div>
          <p className="pr-5">{d.description}</p>
            <div className="row">
              <div className="col-8 d-flex ">
                <div className="btn btn-secondary mr-2">
                <Link className="text-white" 
                to={`/decks/${d.id}`} ><i className="bi bi-eye-fill "></i> View</Link>                   
                </div>
                  <div className="btn btn-primary">
                 <Link className="text-white" 
                 to={`/decks/${d.id}/study`} 
                 >Study</Link>
                  </div>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <button 
                className="btn btn-danger" 
                onClick={(() => handleDelete(d.id))}
                >&#128465;</button>
              </div>
            </div>
            </div>
          ))}
    </div>
}

export default Home

