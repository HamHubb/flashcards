import React from 'react';
import { useHistory } from "react-router-dom";
// import CreateDeck from '../Deck'


function DeckForm( { formData, setFormData, handleSubmit} ) { 
  const history = useHistory();
  const handleCancel = (()=> {
    history.goBack();
  })
  
    return (
    <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            required
            placeholder={formData.name}
            className="form-control"
            type="text"
            value={formData.name}
            onChange={(event) => setFormData({...formData, name: event.target.value})}
          />
          <label className="form-label">Description</label>
          <textarea
            required
            placeholder={formData.description}
            className="form-control"
            type="text"
            rows="3"
            value={formData.description}
            onChange={(event) => setFormData({...formData, description: event.target.value})}
          >
          </textarea>
          <button className="btn btn-secondary" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-primary " type="submit">Submit</button>
        </form>
)}



export default DeckForm;