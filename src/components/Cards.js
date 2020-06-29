import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const api = 'https://api.magicthegathering.io/v1/cards';


export default function CardsQuery({cards = [], loadingText, children}) {
    if(loadingText){
        return (
            <>
                <h1>Carregando...</h1>
            </>
        )
    }

    return <>
        {cards.map(card => (
            <Link to={card.id}>
                <img src={card.imageUrl}/>
            </Link>
        ))}
    </>
}
