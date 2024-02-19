import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';


import './ContactUs.css'

const ContactUs = () => {

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

    return(
        
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: .2}}
            className="action">
            <motion.div custom={0} variants={textAnimation} className="container">
                <h2 className="action__title">Quality graphic designs that are guaranteed to impress your visitors – delivered in no time</h2>
                <p className="action__desc">Ask for our competitive rates to get started</p>
                <NavLink to="/contacts">
                    <button  className="button cooperation__button">Contact us</button>
                </NavLink>
            </motion.div>
        </motion.section>
    )
}

export default ContactUs;