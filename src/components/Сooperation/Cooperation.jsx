import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Cooperation.css';

const Cooperation = () => {

    const cooperationsList = [
        {
            title: "Briefing",
            desc: "We are a process-driven design agency. Before getting started, we ﬁrst discuss the details of the design project clearly. You can brief us with your requirements either via email, chat, or call (whatever is convenient for you). Our team will get in touch with you and thoroughly discuss every minute detail to make sure that we could deliver you exactly what you want. Consequently, the estimate and timeline for the project also get discussed at this point"
        },
        {
            title: "Wireframing",
            desc: "This is the planning stage. At this point, we will provide you with the wireframing based on your specific requirements. The wireframes will help us determine the format, approach, and style of the design"
        },
        {
            title: "Designing",
            desc: "As soon as our team gets accustomed to the specifications and a wireframe gets finalized, we will start working on the designing aspects. Any additions, suggestions, and late changes get communicated at this stage and our designers and project managers ensure that this all goes very smoothly"
        },
        {
            title: "Delivery",
            desc: "Here comes the time for the final delivery! As committed to you, this is the stage when you will be provided with the first draft of the design for your review and feedback. This is a cycle process and we handle your change requests. Once all is done, we deliver you the final files"
        },
    ]

    const textAnimation = {
        hidden: {
            y: 10,
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


    const cooperations = cooperationsList.map((coop, i) => {
        return(
            <motion.li
                variants={textAnimation}
                custom={i + 1}
                key={i}
                className="cooperation__item">
                <h3 className="cooperation__title">{coop.title}</h3>
                <p className="cooperation__desc">{coop.desc}</p>
            </motion.li>
        )
    })

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: .1, once: true}}
            className="chapter cooperation">
            
            <div className="container">
            <div className="title__content">
                <motion.h2
                    variants={textAnimation}
                    custom={0}
                    className="title title_white">
                    Steps of Cooperation
                </motion.h2>
            </div>
                <div className="cooperation__content">
                    <ul className="cooperation__list">
                        {cooperations}
                    </ul>
                </div>
            </div>
        </motion.section>
        
    )
}

export default Cooperation;