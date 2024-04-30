import { useEffect } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion';
import './AboutUs.css'


const AboutUs = () => {
    // const [num, setNum] = useState(3);

    // useEffect(() => {
        
    //     let interval = setInterval(() => {
    //         setNum(getRandomInt(1, 9));
    //     }, 50)

    //     setTimeout(() => {

    //     clearInterval(interval)
    //     setNum(3)

    //     }, 2000);
    // }, [])

    // function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    return(
       
                <div className="statistic__box">
                    <ul className="statistic__list">

                        <li className="statistic__item">
                            <h3 className="statistic__title">3+</h3>
                            <p className="statistic__desc">years of expertise in E-commerce</p>
                        </li>

                        <li className="statistic__item">
                            <h3 className="statistic__title">15+</h3>
                            <p className="statistic__desc">people in the team</p>
                        </li>

                        <li className="statistic__item">
                            <h3 className="statistic__title">70+</h3>
                            <p className="statistic__desc">successful projects</p>
                        </li>

                    </ul>
                </div>
     
        
    )
}

export default AboutUs;