import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./OurWorks.css";

const OurWorks = () => {
	
	const imagesList = [
		{
			img: "./img/carousel/main/Cristyler.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Ecolait.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Incas_Protect.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Poweronyx.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Pursanga.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/RetinOn.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Sustarox.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Yaconia.png",
			name: "Incasol",
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
		
				freeMode={true}
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
					1080: {
						slidesPerView: 5,
						spaceBetween: 20
					}
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				// mousewheel={{ forceToAxis: true, sensitivity: 0.5, releaseOnEdges: true }}
				// centeredSlides={true}
					
			>
				{images}
			</Swiper>
		</div>
	)
}

export default OurWorks;
