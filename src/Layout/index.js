import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home"
import {Route, Switch} from "react-router-dom"
import Study from "../Study"
import React, { useEffect, useState } from "react";
import { listDecks } from  '../utils/api';
import CreateDeck from '../Deck/CreateDeck'

function Layout() {
  const [decks, setDecks] = useState([])
  useEffect(() => {
    listDecks()       
    .then(data => setDecks(data))
    
}, [])

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
      <Switch>
        <Route path={`/decks/:deckId/study`}>
          <Study decks={decks}/>
        </Route>
        <Route path={`/decks/new`}>
          <CreateDeck />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
