import React from 'react';
import { useHistory } from "react-router-dom";



function CardForm( { formData, setFormData, handleSubmit} ) { 
  const history = useHistory();
  const handleCancel = (()=> {
    history.goBack();
  })
  // const handleClick = (fieldName) => {
  //   setFormData({
  //     ...formData,
  //     [fieldName]: "",
  //   })
  // }
  
    return (
    <form onSubmit={handleSubmit}>
          <label className="form-label">Front</label>
          <textarea
            required
            placeholder={formData.front}
            className="form-control"
            type="text"
            value={formData.front}
            // onClick={()=>handleClick("front")}
            onChange={(event) => setFormData({...formData, front: event.target.value})}
          >
          </textarea>
          <label className="form-label">Back</label>
          <textarea
            required
            placeholder={formData.back}
            className="form-control"
            type="text"
            rows="3"
            value={formData.back}
            // onClick={()=>handleClick("back")}
            onChange={(event) => setFormData({...formData, back: event.target.value})}
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