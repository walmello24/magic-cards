import React from 'react'
import {Navbar} from 'react-bootstrap'
import Logo from './Logo.js'
import Search from './Search.js'

export default function Navigation({getCards}) {
    return (
        <Navbar bg='light'>
            <Logo/>
            <div className="ml-auto">
                <Search getCards={getCards} />
            </div>
        </Navbar>
    )
}
