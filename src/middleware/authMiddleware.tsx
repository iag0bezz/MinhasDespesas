import React, { Component } from 'react'

import { useAuth } from '../hooks/useAuth'

import { Route, Redirect } from 'react-router-dom'
import { ReactNode } from 'react'

type Props = {
    component: ReactNode;
    path: string
}

export const ProtectedRoute: React.FC<Props> = ({ component, ...rest }) => {
    const { user } = useAuth()
    
    return (
        <Route {...rest} render={props => (
            user ? (
              <Component {...props}/>
            ) : (
              <Redirect to={{
                pathname: '/',
                state: { from: props.location }
              }}/>
            )
        )}/>
    )
}