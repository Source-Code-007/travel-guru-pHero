import React from 'react';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const {id} = useParams()
    return (
        <div className='h-screen bg-red-500 flex justify-center items-center text-white font-bold text-3xl'>
            <h2>This is hotel component!</h2>
        </div>
    );
};

export default Hotel;