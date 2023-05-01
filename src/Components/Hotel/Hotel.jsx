import React from 'react';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>This is hotel component!</h2>
        </div>
    );
};

export default Hotel;