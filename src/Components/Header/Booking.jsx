import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = ({booking}) => {
    return (
        <div className='my-28 max-w-7xl mx-auto grid grid-cols-2'>
            <div className='space-y-4 text-white px-10 flex justify-center flex-col'>
                {
                    booking && <>
                        <h2 className='font-bold text-5xl'>{booking.name}</h2>
                        <p className='text-slate-200'>{booking.description}</p>
                        {/* <Link onClick={()=> setBooking(selectedData)} type="button" className="bg-green-500 rounded-lg py-2 px-4 w-fit">Booking <FaArrowRight className='inline-block' /> </Link> */}
                    </>
                }
            </div>
            <div className=''>
               <form action="#" className='p-28 bg-slate-50 rounded-lg'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
               </form>
            </div>
        </div>
    );
};

export default Booking;