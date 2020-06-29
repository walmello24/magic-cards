import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import Search from './Search.js'

export default function Header({ getCards }) {
    return (
        <Jumbotron fluid>
            <Container>
                <Search getCards={getCards} />
            </Container>
        </Jumbotron>
    )
}
