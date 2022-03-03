import React, {useState} from "react"
import {ImgSlider} from './style'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {EffectCoverflow, Pagination, Navigation} from "swiper/core"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectCoverflow, Pagination, Navigation])

export default function Carrossel(){

    return(
        <Swiper spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            centeredSlides={true}
            loop={true}
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={{
                clickable: true
            }}
        >
            <SwiperSlide>
            <ImgSlider src="images/carnaval.jpg" alt="aa" style={{width: '100%'}}></ImgSlider>
            </SwiperSlide>
            <SwiperSlide>
                <ImgSlider src="images/carnaval.jpg" alt="aa" style={{width: '100%'}}></ImgSlider>
            </SwiperSlide>
        </Swiper>
    )
}