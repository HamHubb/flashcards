import React from 'react';
import { useHistory } from "react-router-dom";



function CardForm( { formData, setFormData, handleSubmit} ) { 
  const history = useHistory();
  const handleCancel = (()=> {
    history.goBack();
  })
  
  
    return (
    <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="Front">Front</label>
          <textarea
            id="Front"
            required
            placeholder={formData.front}
            className="form-control"
            type="text"
            value={formData.front}
            
            onChange={(event) => setFormData({...formData, front: event.target.value})}
            autoComplete='off'
          >
          </textarea>
          <label className="form-label" htmlFor="Back">Back</label>
          <textarea
            id="Back"
            required
            placeholder={formData.back}
            className="form-control"
            type="text"
            rows="3"
            value={formData.back}
            
            onChange={(event) => setFormData({...formData, back: event.target.value})}
            autoComplete='off'
          >
          </textarea>
          <div className="mt-2">
            <button className="btn btn-secondary mr-2" type="button" onClick={handleCancel}>
              Done
            </button>
            <button className="btn btn-primary " type="submit">Save</button>
          </div>
        </form>
)}



export default CardForm;