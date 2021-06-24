/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import HashLoader from 'react-spinners/HashLoader'

interface ProtectedRouteProps extends RouteProps {
  component:
   | React.ComponentType<RouteComponentProps<any>>
   | React.ComponentType<any>
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user, checking } = useAuth()

  return (
    <Route 
      {...rest}
      render={props => checking ? <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}><HashLoader color='#835afd' size={50} loading={checking} /></div> : user ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

export default ProtectedRoute