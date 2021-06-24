import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { AuthContextProvider } from './contexts/AuthContext'

import ProtectedRoute from './middleware/authMiddleware'

import {
  Login,
  Dashboard
} from './pages'

export default function Routes() {
    return (
        <BrowserRouter>
            <Toaster />
            <AuthContextProvider>
                <Switch>
                    <ProtectedRoute component={Dashboard} path='/dashboard' />
                    <Route exact path='/' component={Login} />

                    <Redirect from='*' to='/' />
                </Switch>
            </AuthContextProvider>
        </BrowserRouter>
    )
}