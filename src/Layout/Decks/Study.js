import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { readDeck } from '../../utils/api'

import Card from '../Cards/Card'

const Study = () => {
  const [deck, setDeck] = useState({})
  const { deckId } = useParams()

  useEffect(() => {
    const findDeck = async () => {
      try {
        const currentDeck = await readDeck(deckId)
        setDeck(() => currentDeck)
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error)
        }
      }
    }
    findDeck()
  }, [deckId])

  return (
    <div className="col-9 mx-auto">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={'/'}> Home</Link>
          </li>

          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>

          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>

      <div>
        <h1>Study: {deck.name}</h1>
      </div>
      <Card cards={deck.cards} deck={deck} />
    </div>
  )
}

export default Study