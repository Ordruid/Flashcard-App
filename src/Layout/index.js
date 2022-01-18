import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Common/Header'
import Home from './Home'
import NotFound from './NotFound'
import Study from './Decks/Study'
import CreateDeck from './Decks/CreateDeck'
import Deck from './Decks/Deck'
import EditCard from './Cards/EditCard'
import EditDeck from './Decks/EditDeck'
import AddCard from './Cards/AddCard'

const Layout = () => {

  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId" exact>
            <Deck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Layout;
