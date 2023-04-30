import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutOne from '../Components/Layout/LayoutOne';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        children: [
            {

            }
        ]
    }
])