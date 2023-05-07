import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    let [destination, setDestination] = useState()
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://travel-guru-server-bice.vercel.app/destination/${id}`)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])
    let { id: _id, name, hotels } = destination || {}
    return (
        <div className='min-h-screen'>
            <div className='max-w-7xl mx-5 lg:mx-auto'>
                <h2>Stay in {name}</h2>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='space-y-6'>
                        {hotels && hotels.map((hotel, ind) => {
                            const { name, address, pricePerNight, photo, rating } = hotel
                            return <div key={ind} className='grid grid-cols-2 gap-4'>
                                <img src={photo} alt="" />
                                <div className='flex flex-col justify-between'>
                                    <h2>{name}</h2>
                                    <p className='text-slate-500 flex items-center gap-2'> <FaLocationArrow></FaLocationArrow> {address}</p>
                                    <div className='flex justify-between'>
                                        <p>{rating}</p>
                                        <p className='text-red-500'>{pricePerNight}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;