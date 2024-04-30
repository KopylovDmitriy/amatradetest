import { motion } from 'framer-motion';

import { useEffect } from 'react';


import AboutUs from '../AboutUs/AboutUs';
import './Services.css';


const Services = () => {

    const servicesList = [
        {
            title: 'Product Listings Images',
            desc: 'Revitalise your listings with our image creation services. We specialise in creating compelling visuals that attract potential buyers. From high-quality product shots to eye-catching lifestyle images, we make your listings shine',
            img: './img/icons/listings.svg'
        },
        {
            title: 'A+/A++ content',
            desc: 'Boost your Amazon product listing with our A+ and A++ content creation service! We conduct in-depth research, curate photography styles, design high-quality infographics and create compelling brand stories to enhance your product listings',
            img: './img/icons/aplus.svg'
        },
        {
            title: 'BRANDING AND PACKAGE DESIGN',
            desc: "Whether you're starting a new brand or improving an existing one, we can help with packaging and branding",
            img: './img/icons/branding.svg'
        },
        {
            title: 'Store designs',
            desc: "Do you run your own personal website or shop online? Or you're struggling to highlight the most important parts of your store on a marketplace. We can help!",
            img: './img/icons/store.svg'
        },
        {
            title: 'Social media design',
            desc: 'Our thoughtful designs bring your content to life and help you quickly grow your social media following with professionally designed posts that stand out!',
            img: './img/icons/social.svg'
        },
    ]

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

    const services = servicesList.map((service, i) => {
        return(
            <motion.div
                custom={i + 1}
                variants={textAnimation}
                
                key={i}
                className="services__item">
                <div className="services__icon">
                    <img src={service.img} alt={service.title} />
                </div>
                <div className="services__info">
                    <h3 className="service__title">{service.title}</h3>
                    <p className="service__desc">{service.desc}</p>
                </div>
            </motion.div>
        )
    })

    return (
        <motion.section
            initial="hidden"
            viewport={{amount: .1, once: true}}
            whileInView="visible"
            className="chapter services">
        
            <div className="container">
                <motion.div custom={0} variants={textAnimation} className="title__content">
                    <h2 className="title">What we do</h2>
                </motion.div>
                <div className="services__list">
                   {services}
                </div>
            </div>
            
        </motion.section>
    )
}

export default Services;