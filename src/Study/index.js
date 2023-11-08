// import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
// import { Home } from '../Home';


function Study(  ) {
   const {deckId} = useParams();
   console.log(deckId)
    
    return <div><nav aria-label="breadcrumb">
                 <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="">decks</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                 </ol>
                </nav>
            <h2>Study: {}</h2>
            <div className="container border">
                <div>
                    Card  of 
                </div>
                <div>
                 {'front'}
                </div>
                <button className="col-2 btn btn-secondary">Flip</button>
            </div>
    </div>
}

export default Study;