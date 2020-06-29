import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import Cards from './components/Cards.js';
import Header from './components/Header.js';
import axios from 'axios';
import Router from './components/Router.js';
import {Route, Switch} from 'react-router-dom';
import Details from './components/Details';

import {Container} from  'react-bootstrap';

const api = 'https://api.magicthegathering.io/v1/cards'

function App() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(null)
  const [card, setCard] = useState({})

  const getCards = (params) => { 
    console.log('buscando cartas')
    console.log('na url', api, params)
    axios.get(api, {params})
      .then(res => res.data.cards)
      .then(res => {
        console.log('cartas buscadas')
        setCards(res)
      })
    }

  const getCardById = id => {
    console.log('buscando carta')
    console.log('na url', api, id)
    axios.get(api, {
      params: { id }
    }).then(res => res.data.cards[0])
      .then(res => {
        console.log('carta buscada')
        console.log(res)
        setCard({...res})
      })
  }

  return (
    <div className="App">      
          <Router>
            <Navigation getCards={getCards}/>
            <Container>
              <Switch>
                <Route path="/" exact>
                  <h1>Página principal</h1>
                  <Cards cards={cards} loadingText={loading} />
                </Route>        
                <Route path="/:id">
                  <h1>Detalhes</h1>
                  <Details getCard={getCardById} card={card}/>
                </Route>
              </Switch>
            </Container>
          </Router> 
    </div>
  );
}

export default App;
