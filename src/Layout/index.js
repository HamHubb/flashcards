import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home"
import {Route, Switch} from "react-router-dom"
import Study from "../Study"
import React from "react";
// import { listDecks } from  '../utils/api';
import CreateDeck from '../Deck/CreateDeck'
import DeckScreen from '../Deck/DeckScreen'
import EditDeck from '../Deck/EditDeck'
import AddCard from '../Card/AddCard'
import EditCard from '../Card/EditCard'

function Layout() {
//   const [decks, setDecks] = useState([])
//   useEffect(() => {
//     listDecks()       
//     .then(data => setDecks(data))
    
// }, [])

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
      <Switch>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <EditCard />
        </Route>
        <Route path={`/decks/:deckId/cards/new`}>
          <AddCard />
        </Route>
        <Route path={`/decks/:deckId/study`}>
          <Study />
        </Route>
        <Route path={`/decks/:deckId/edit`}>
          <EditDeck />
        </Route>
        <Route path={`/decks/new`}>
          <CreateDeck />
        </Route>
        <Route path={`/decks/:deckId`}>
          <DeckScreen />
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
