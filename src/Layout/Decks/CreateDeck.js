
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createDeck } from '../../utils/api'

const CreateDeck = () => {
  const history = useHistory()
  const [newDeck, setNewDeck] = useState({
    name: '',
    description: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await createDeck(newDeck)
    history.push(`/decks/${response.id}`)
  }

  const handleChange = (event) => {
    setNewDeck({ ...newDeck, [event.target.name]: event.target.value })
  }

  return (
    <div className="col-9 mx-auto">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item breadcrumb-Active">Create Deck</li>
        </ol>
      </nav>

      <div className="container">
        <div className="row">
          <h1>Create Deck</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            name="name"
            type="text"
            placeholder="Deck Name"
            value={newDeck.name}
            onChange={handleChange}
            style={{ width: '100%' }}
            required
          />
          <div className="row"></div>
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            name="description"
            placeholder="Brief description of the deck"
            maxLength="200"
            value={newDeck.description}
            onChange={handleChange}
            style={{ width: '100%' }}
            required
          />
        </div>
        <br />
        <Link to="/" className="btn btn-secondary mr-3">
          Cancel
        </Link>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateDeck
