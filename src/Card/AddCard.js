import React, { useEffect, useState } from 'react';
import { createCard, readDeck } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import CardForm from '../FormComponents/CardForm'

function AddCard(){
    const {deckId} = useParams();
    // console.log(deckId)
    const [cards, setCards] = useState([])
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setCards(data))
    }, [deckId])
    
    const newCard = {
        front: "Front side of card",
        back: "Back side of card", 
    };
    const [formData, setFormData] = useState(newCard)
  
    const resetForm = () => {
      setFormData(newCard);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const createdCard = await createCard(deckId, formData);
        resetForm();
    };
    return (
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
               <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
               <Link to="/">{cards.name}</Link>
              </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h2>{cards.name}: Add Card</h2>
        <CardForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      </div> 
        </div>
    )
}
export default AddCard;