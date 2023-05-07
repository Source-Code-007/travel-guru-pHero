import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

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
        <div className='min-h-screen py-10'>
            <div className='max-w-7xl mx-5 lg:mx-auto'>
                <h2 className='text-3xl font-bold mb-4 text-center'>Stay in {name}</h2>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        {hotels && hotels.map((hotel, ind) => {
                            const { name, address, pricePerNight, photo, rating } = hotel
                            return <div key={ind} className='grid grid-cols-2 gap-4 shadow'>
                                <img className='h-full w-full rounded-l' src={photo} alt="" />
                                <div className='flex flex-col justify-between px-3 py-1'>
                                    <h2 className='text-2xl font-bold'>{name}</h2>
                                    <p className='text-slate-500 flex items-center gap-2'> <FaLocationArrow></FaLocationArrow> {address}</p>
                                    <div className='text-gray-400 my-4 space-y-1'>
                                        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                        <p>Wif Air conditioning Kitchen</p>
                                        <p>Cancellation fexibility availiable</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p><Rating style={{ maxWidth: 100 }} readOnly value={rating} /></p>
                                        <p className='font-bold text-lg'>{pricePerNight}<span className='text-slate-500 font-normal'>/night</span></p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59415.151056635244!2d91.96170239775444!3d21.450972995137047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1683440956597!5m2!1sen!2sbd" style={{height: '100%', width: '100%', border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;