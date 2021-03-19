import React from 'react'

// @dev import packages
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// @dev import pages
import Home from './Pages/Home/Home'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
