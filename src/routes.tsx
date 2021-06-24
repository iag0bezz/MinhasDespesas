import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import {
  Login
} from './pages'


export default function Routes() {
    return (
        <BrowserRouter>
            <Toaster />
            <Switch>
                <Route exact path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}