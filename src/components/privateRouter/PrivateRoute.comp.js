import React from 'react'
import { Route, Navigate } from "react-router-dom";
import { DefaultLayout } from '../../layout/defaultLayout';


let isAuth = true
export const PrivateRoute = ({children, ...rest}) => {

  return (
    <Route
    render = {() => {
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : Navigate("/")
    }}
    />
  )
}
