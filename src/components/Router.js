import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Main from './Main.js'
import Details from './Details.js'

export default function({children}) {
    return (
        <Router>
            {children}  
        </Router>
    )
}
