import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Banner = ({ setDynamicImg, setBooking }) => {
    const [travelData, setTravelData] = useState()
    const [selectedData, setSelectedData] = useState()

    useEffect(() => {
        fetch('https://travel-guru-server-bice.vercel.app/destinations')
            .then(res => res.json())
            .then(data => {
                setTravelData(data.destinations)
                setSelectedData(data.destinations[0])
            })
    }, [])

    // carousel click func
    const swiperFunc = (data) => {
        setSelectedData(data)
        setDynamicImg(data.photo)
    }

    return (
        <div className='my-28 ml-24 grid grid-cols-12'>
            <div className='space-y-4 text-white col-span-5 px-10 flex justify-center flex-col'>
                {
                    selectedData && <>
                        <h2 className='font-bold text-5xl'>{selectedData.name}</h2>
                        <p className='text-slate-200'>{selectedData.description}</p>
                        <Link onClick={()=> setBooking(selectedData)} type="button" className="bg-green-500 rounded-lg py-2 px-4 w-fit">Booking <FaArrowRight className='inline-block' /> </Link>
                    </>
                }
            </div>
            <div className='col-span-7'>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper">
                    {
                        travelData && travelData.map(data => {
                            return <SwiperSlide onClick={() => swiperFunc(data)} key={data.id}>
                                <div style={{ backgroundImage: `url(${data.photo})` }} className='h-96 cursor-pointer bg-cover bg-center rounded-lg relative group bg-slate-600 bg-blend-overlay'>
                                    <a href='#' className='shadow font-bold text-3xl bg-slate-800 bg-opacity-40 text-white py-5 absolute bottom-2 left-0 right-0 text-center group-hover:bg-opacity-70 duration-500'>{data.name}</a>
                                </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;