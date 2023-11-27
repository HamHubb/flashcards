import React, { useState, useEffect } from "react";
import { readCard, readDeck, updateCard } from "../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from '../FormComponents/CardForm'

function EditCard() {
    
  const {deckId, cardId} = useParams();
  const initialCard = {
    "front": "",
    "back": "",
    "deckId": deckId,
  };
  // console.log(cardId)
  const [formData, setFormData] = useState(initialCard)
  const [deckData, setDeckData] = useState()
  const history = useHistory();

  useEffect(()=>{
    const loadedCardData = async () => {
      try{
        const loadedCard = await readCard(cardId)
        const loadedDeck = await readDeck(deckId);
        setFormData({
          "front": loadedCard.front,
          "back": loadedCard.back,
          "deckId": deckId,
        })
        setDeckData({
          name: loadedDeck.name,
          description: loadedDeck.description,
          cards: loadedDeck.cards                       
        })
       
        } catch (error) {
          console.error("Card loading data:", error);
        }
      }
      loadedCardData();
    }, [deckId, cardId])
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const updatedCard = {
        "front": formData.front,
        "back": formData.back,
        "deckId": Number(deckId),
        "id": Number(cardId)
    };
    console.log("updatedCard is:", updatedCard)
    await updateCard(updatedCard)

    history.goBack();
    
    } catch (error) {
    console.error("Card updating:", error)
  }

  };
  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Deck {deckData ? deckData.name : ''}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <div>
        <h2>Edit Card</h2>
        <CardForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default EditCard;

