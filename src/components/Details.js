import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Details({getCard, card}) {
    const id = (useParams()).id

    useEffect(() => {
        getCard(id) 
    },[])

    return (
        <div>
            <h1>{card.name}</h1>
            <img src={card.imageUrl}/>
            <ul>
                {card.colors !== undefined ? 
                card.colors.map(c => <li>{c}</li>): null}
            </ul>
            <p>{card.originalText}</p>
            <p>{card.flavor}</p>
        </div>
    )
}
