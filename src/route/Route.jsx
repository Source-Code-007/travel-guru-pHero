import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';
import Banner from '../Components/Header/Banner';
import Booking from '../Components/Header/Booking';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            // {
            //     path: '/',
            //     element: <Banner></Banner>
            // },
            // {
            //     path: 'booking/:id',
            //     element: <Booking></Booking>
            // }
        ]
    }
])