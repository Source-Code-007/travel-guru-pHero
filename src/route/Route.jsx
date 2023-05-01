import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';
import Signin from '../Components/Signin/Signin';
import Signup from '../Components/Signup/Signup';
import Hotel from '../Components/Hotel/Hotel';
import LayoutTwo from '../Components/Layout/LayoutTwo';

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
            },
        ]
    },
    {
        path: 'hotel/:id',
        element: <LayoutTwo></LayoutTwo>,
        children: [
            {
                path: '/hotel/:id',
                element: <Hotel></Hotel>
            }
        ]
    }
])