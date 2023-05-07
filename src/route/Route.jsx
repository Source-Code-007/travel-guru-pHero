import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';
import Signin from '../Components/Signin/Signin';
import Signup from '../Components/Signup/Signup';
import Hotel from '../Components/Hotel/Hotel';
import Header from '../Components/Header/Header';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
    },
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            {
                path: '/hotel/:id',
                element: <Hotel></Hotel>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
])