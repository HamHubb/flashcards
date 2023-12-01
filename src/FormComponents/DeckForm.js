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
          <label className="form-label" htmlFor="name">Name</label>
          <input
            id="name"
            required
            placeholder={formData.name  || ""}
            className="form-control"
            type="text"
            value={formData.name}
            onChange={(event) => setFormData({...formData, name: event.target.value})}
            autoComplete='off'
          />
          <label className="form-label" htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            placeholder={formData.description  || ""}
            className="form-control"
            type="text"
            rows="3"
            value={formData.description}
            onChange={(event) => setFormData({...formData, description: event.target.value})}
            autoComplete='off'
          >
          </textarea>
          <button className="btn btn-secondary mr-2" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-primary " type="submit">Submit</button>
        </form>
)}



export default DeckForm;