import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(1)
  const [frontSide, setFrontSide] = useState(true)
  const history = useHistory()

  const flipHandler = () => {
    setFrontSide(() => !frontSide)
  }

  function nextHandler() {
    setCurrentCard(currentCard + 1)
    setFrontSide(!frontSide)
    if (currentCard >= cards.length) {
      if (window.confirm('Restart Cards?')) {
        setCurrentCard(1)
        setFrontSide(!frontSide)
      } else {
        history.push('/')
      }
    }
  }


  if (cards) {
    if (cards.length > 2) {
      return (
        <div className="card w-75 mb-4">
          <div className="card-body">
            <div className="row px-3">
              <h5>
                Card {currentCard} of {cards.length}
              </h5>
            </div>
            <p className="card-text">
              {frontSide
                ? cards[currentCard - 1].front
                : cards[currentCard - 1].back}
            </p>
            <div className="row px-3">
              <button onClick={flipHandler} className="btn btn-secondary">
                Flip
              </button>

              {!frontSide ? (
                <button onClick={nextHandler} className="btn btn-primary ml-3">
                  Next
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return (
      <div>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards. There are {cards.length} cards in your
          deck.
        </p>
      </div>
      )
    }
  } else {
    return <h3>Loading...</h3>
  }
}

export default Card
