import React, { useState, useEffect } from "react";
import { updateDeck, readDeck } from "../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForm from '../FormComponents/DeckForm'

function EditDeck() {
  
    const initialDeck = {
        name: "",
        description: "",
        cards: [], 
    };
  const [formData, setFormData] = useState(initialDeck)
  const {deckId} = useParams();
  const history = useHistory();

  useEffect(()=>{
    const loadedDeckData = async () => {
        try{
          const loadedDeck = await readDeck(deckId);
          setFormData({
            name: loadedDeck.name,
            description: loadedDeck.description,
            cards: loadedDeck.cards
          })
          // console.log(loadedDeck.cards)
        } catch (error) {
            console.error("Deck loading data:", error);
        }
    }
    loadedDeckData();
  }, [deckId])
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const updatedDeck = await updateDeck({
        id: deckId,
        name: formData.name,
        description: formData.description,
        cards: formData.cards
    });
    history.push(`/decks/${updatedDeck.id}`);
} catch (error) {
    console.error("Deck updating:", error)
}

  };
  // console.log(formData.cards)
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">{formData.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* {`Edit Deck ${cardId}`} */}
          </li>
        </ol>
      </nav>
      <div>
        <h2>Edit Deck</h2>
        <DeckForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default EditDeck;