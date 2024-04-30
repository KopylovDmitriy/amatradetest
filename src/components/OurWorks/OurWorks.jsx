import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';



import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./OurWorks.css";

const OurWorks = () => {
	
	const imagesList = [
		{
			img: "./img/carousel/main/Vimvital.webp",
			name: "Vimvital",
		},
		{
			img: "./img/carousel/main/Lutevid.webp",
			name: "Lutevid",
		},
		{
			img: "./img/carousel/main/Poweronyx.webp",
			name: "Poweronyx",
		},
		{
			img: "./img/carousel/main/Pursanga.webp",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/main/Oxys.webp",
			name: "Oxys",
		},
		{
			img: "./img/carousel/main/Sustarox.webp",
			name: "Sustarox",
		},
		{
			img: "./img/carousel/main/Sorax.webp",
			name: "Sorax",
		},
		{
			img: "./img/carousel/main/Motion-Free.webp",
			name: "Motion-Free",
		},
		{
			img: "./img/carousel/main/Renaza.webp",
			name: "Renaza",
		},
		{
			img: "./img/carousel/main/Ecolait.webp",
			name: "Ecolait",
		},
		{
			img: "./img/carousel/main/Uventa.webp",
			name: "Uventa",
		},
		{
			img: "./img/carousel/main/Yaconia.webp",
			name: "Yaconia",
		},
	]

	const images = imagesList.map((image, i) => {
		return (
			<SwiperSlide key={image + i}>
				<img src={image.img} alt={image.name} />
			</SwiperSlide>
		)
	})

	const textAnimation = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1
            }
        })
    }

	return (
		<motion.section
			initial="hidden"
			viewport={{amount: .1, once: true}}
			whileInView="visible"
			className='chapter'>
				<div className="container">
				<motion.div custom={0} variants={textAnimation} className='title__content'>
				<h2 className='title'>HOW WE DO</h2>
			</motion.div>
				</div>
			
			
			<Swiper
				// freeMode={true}
				// pagination={{
				// clickable: true,
				// }}
				modules={[FreeMode, Autoplay]}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 1.5,
						spaceBetween: 10
					},
					810: {
						slidesPerView: 2.5,
						spaceBetween: 10
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
				initialSlide={3}
				centeredSlides={true}
			>
				{images}
			</Swiper>
		</motion.section>
	)
}

export default OurWorks;
