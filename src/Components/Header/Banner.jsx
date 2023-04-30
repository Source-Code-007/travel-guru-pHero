import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Banner = () => {
    const [travelData, setTravelData] = useState()

    useEffect(() => {
        fetch('http://localhost:2000/destinations')
            .then(res => res.json())
            .then(data => setTravelData(data.destinations))
    })

    return (
        <div className='my-28 grid grid-cols-2'>
            <div>
                <h2 className='font-bold text-slate-50 text-3xl'>wow amazing!</h2>
                <h2 className='font-bold text-slate-50 text-3xl'>{travelData && travelData.length}</h2>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper">
                    {
                        travelData && travelData.map(data => {
                            return <SwiperSlide key={data.id}>
                                <div style={{ background: `url(${data.photo})` }} className='h-96 bg-red-500 rounded-lg relative'>
                                    <h2 className='shadow-inner bg-slate-800 bg-opacity-70 text-white py-10 absolute bottom-2 left-0 right-0 text-center'>{data.name}</h2>
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