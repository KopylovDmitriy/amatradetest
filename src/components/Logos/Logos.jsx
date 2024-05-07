import { useEffect } from "react";

import { motion } from 'framer-motion';

import AboutUs from "../AboutUs/AboutUs";

import "./Logos.css"

const Logos = () => {

    function addAnimation () {

        const scrollers = document.querySelectorAll(".scroller");
        scrollers.forEach((scroller) => {
            scroller.setAttribute('data-animated', true)

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem)
            })

        })

    }
    
    useEffect(() => {
        addAnimation();
    }, [])

    const modalAnimation = {
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

    return(
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: .1}}
            className="chapter logos">

                <motion.div  className="scroller" data-animated="true">
                    <ul className="tag-list scroller__inner">
                        <li className="logos__item">
                            <img src="./img/logos/allegro.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/amazon.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/ebay.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/jumia.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/mercado.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/shopify.svg" alt="fsd" className="logo" />
                        </li>
                        <li className="logos__item">
                            <img src="./img/logos/etsy.svg" alt="fsd" className="logo" />
                        </li>
                    </ul> 
                </motion.div>

                <motion.div custom={0} variants={modalAnimation} className="statistic__body">
                    <div className="container">
                        <AboutUs />
                    </div>         
                </motion.div> 
            
        </motion.section>
    )
}

export default Logos;