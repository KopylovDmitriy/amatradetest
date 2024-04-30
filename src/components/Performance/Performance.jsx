import { motion } from 'framer-motion';
import AboutUs from '../AboutUs/AboutUs';

import './Performance.css';

const Performance = ({content}) => {
    const {title, subtitle, desc, className} = content;
    
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

    const statisticAnimation = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: custom => ({
            y: 20,
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
                viewport={{amount: .2, once: true}}
                >
        
                <div className={className}>
                    <div className="performance__content">
                        <div className="container">
                            <div className="performance__info">
                                <motion.h1 custom={1} variants={textAnimation} className="performance__title">{title}</motion.h1>
                                <motion.h2 custom={2} variants={textAnimation} className="performance__subtitle">{subtitle}</motion.h2>
                                <motion.div custom={3} variants={textAnimation}>
                                    {desc}
                                </motion.div>
                            </div> 
                            
                        </div>
                        
                        
                                

                    </div>  
                    
                </div>
            </motion.section>
            
            
       
    )
}

export default Performance;