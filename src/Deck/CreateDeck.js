import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { Link, useHistory } from "react-router-dom";
import DeckForm from '../FormComponents/DeckForm'

function CreateDeck() {
const newDeck = {
        name: "",
        description: "",
        cards: [], 
    };
const [formData, setFormData] = useState(newDeck)
const history = useHistory();
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
const createdDeck = await createDeck({
  name: formData.name,
  description: formData.description,
  cards: formData.cards,
});
      history.push(`/decks/${createdDeck.id}`);
    } catch (error) {
      console.error("Submit error:", error)
    }
};

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h2>Create Deck</h2>
        <DeckForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default CreateDeck;