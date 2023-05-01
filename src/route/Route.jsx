import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';
import Signin from '../Components/Signin/Signin';
import Signup from '../Components/Signup/Signup';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
    }
])