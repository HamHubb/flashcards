import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home"
import {Route, Switch} from "react-router-dom"
import Study from "../Study"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
      <Switch>
        <Route path={`/decks/:deckId/study`}>
          <Study />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </div>
    </>
  );
}

export default Layout;
