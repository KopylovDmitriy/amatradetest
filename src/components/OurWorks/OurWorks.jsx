import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./OurWorks.css";

const OurWorks = () => {
	
	const imagesList = [
		{
			img: "./img/carousel/main/RetinOn.png",
			name: "RetinOn",
		},
		{
			img: "./img/carousel/main/Lutevid.png",
			name: "Lutevid",
		},
		{
			img: "./img/carousel/main/Ecolait.png",
			name: "Ecolait",
		},
		{
			img: "./img/carousel/main/Poweronyx.png",
			name: "Poweronyx",
		},
		{
			img: "./img/carousel/main/Pursanga.png",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/main/Sustarox.png",
			name: "Sustarox",
		},
		{
			img: "./img/carousel/main/Incas_Protect.png",
			name: "Incas_Protect",
		},
		{
			img: "./img/carousel/main/Yaconia.png",
			name: "Yaconia",
		},
		{
			img: "./img/carousel/main/Cristyler.png",
			name: "Cristyler",
		},
		{
			img: "./img/carousel/main/Elance.png",
			name: "Elance",
		},
		
		{
			img: "./img/carousel/main/Flemona.png",
			name: "Flemona",
		},
		{
			img: "./img/carousel/main/Uventa.png",
			name: "Uventa",
		},
	]

	const images = imagesList.map((image, i) => {
		return (
			<SwiperSlide key={image + i}>
				<img src={image.img} alt={image.name} />
			</SwiperSlide>
		)
	})

	return (
		<div className='chapter'>
			<div className='title__content'>
				<h2 className='title'>HOW WE DO</h2>
			</div>
			
			<Swiper
				// freeMode={true}
				// pagination={{
				// clickable: true,
				// }}
				modules={[FreeMode, Autoplay]}
				className="mySwiper"
				breakpoints={{
					810: {
						slidesPerView: 1,
						spaceBetween: 0
					},
					1000: {
						slidesPerView: 3.5,
						spaceBetween: 10
					},
					1280: {
						slidesPerView: 4.5,
						spaceBetween: 20
					}
				}}
				
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				// centeredSlides={true}
				grabCursor={true}
				initialSlide={4}
				
				
				
				centeredSlides={true}
			>
				{images}
			</Swiper>
		</div>
	)
}

export default OurWorks;
