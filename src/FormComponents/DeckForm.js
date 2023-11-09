import React from 'react';
import { useHistory } from "react-router-dom";
// import CreateDeck from '../Deck'


function DeckForm( { formData, setFormData, handleSubmit} ) { 
  const history = useHistory();
    return (
    <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            required
            className="form-control"
            type="text"
            value={formData.name}
            onChange={(event) => setFormData({...formData, name: event.target.value})}
          />
          <label className="form-label">Description</label>
          <textarea
            required
            className="form-control"
            type="text"
            rows="3"
            value={formData.description}
            onChange={(event) => setFormData({...formData, description: event.target.value})}
          >
            Brief description of the deck
          </textarea>
          <button type="button" onClick={() => history.push("/")}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </form>
)}



export default DeckForm;