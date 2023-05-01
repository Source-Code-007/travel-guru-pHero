import React, { useState } from 'react';
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const Booking = ({ booking }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate()

    // handle booking func
    const handleBookingFunc = (e) => {
        e.preventDefault()
        const origin = e.target.origin.value
        const destination = e.target.destination.value
        console.log(origin);
        console.log(destination);
        navigate(`/hotel/${booking.id}`)
    }

    return (
        <div className='max-w-7xl min-h-screen mx-auto flex justify-center items-center'>
            <div className='grid grid-cols-2'>
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
                    <form onSubmit={handleBookingFunc} action="#" className='p-10 bg-slate-50 rounded-lg space-y-6'>
                        <div>
                            <label htmlFor="origin">Origin</label>
                            <input type="text" id='origin' name='origin' className='block w-full border-none rounded-lg bg-slate-200 py-4' />
                        </div>
                        <div>
                            <label htmlFor="destination">Destination</label>
                            <input type="text" id='destination' name='destination' className='block w-full border-none rounded-lg bg-slate-200 py-4' />
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <label htmlFor="from">From</label>
                                <DatePicker id='from' className='border-none bg-slate-200 p-4 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div>
                                <label htmlFor="to">To</label>
                                <DatePicker id='to' className='border-none bg-slate-200 p-4 rounded-lg' selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                        <button type='submit' className='bg-red-500 py-3 px-5 w-full rounded-lg text-white font-bold'>Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;