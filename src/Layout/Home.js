import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { listDecks } from '../utils/api'

import DeckList from './Decks/DeckList'

const Home = () => {
  const [decks, setDecks] = useState([])


  useEffect(() => {
    const getDeck = async () => {
      try {
        const getDeckFromAPI = await listDecks()
        setDecks(getDeckFromAPI)
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error)
        }
      }
    }
    getDeck()
  }, [])

  return (
    <div>
      <div className="row mx-auto">
        <Link to="/decks/new" className="btn btn-secondary w-25 mb-3">
          + Create Deck
        </Link>
      </div>

  
      <div className="row w-100 mx-auto">
        {decks.map((deck) => (
          <DeckList key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  )
}

export default Home