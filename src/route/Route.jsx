import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';
import Banner from '../Components/Header/Banner';
import Booking from '../Components/Header/Booking';
import Header from '../Components/Header/Header';
import Signin from '../Components/Signin/Signin';
import Signup from '../Components/Signup/Signup';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            // {
            //     path: '/',
            //     element: <Header></Header>,
            //     children: [
            //         {
            //             path: '/', 
            //             element: <Banner></Banner>
            //         }, 
            //         {
            //             path: '/booking/:id', 
            //             element: <Booking></Booking>
            //         }, 
            //     ]
            // },
            // {
            //     path: 'booking/:id',
            //     element: <Booking></Booking>
            // }
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