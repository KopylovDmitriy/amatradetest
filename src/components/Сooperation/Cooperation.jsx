import { NavLink } from 'react-router-dom';

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

    const cooperations = cooperationsList.map((coop, i) => {
        return(
            <li key={i} className="cooperation__item">
                <h3 className="cooperation__title">{coop.title}</h3>
                <p className="cooperation__desc">{coop.desc}</p>
            </li>
        )
    })

    return (
        <div className="chapter cooperation">
            <div className="title__content">
                    <h2 className="title title_white">Steps of Cooperation</h2>
            </div>
            <div className="container">
                <div className="cooperation__content">
                    <ul className="cooperation__list">
                        {cooperations}
                    </ul>
                </div>
                <div className="cooperation__action">
                    <h2 className="cooperation__title">Quality graphic designs that are guaranteed to impress your visitors – delivered in no time</h2>
                    <p className="cooperation__desc">Ask for our competitive rates to get started</p>
                    <NavLink to="/contacts">
                        <button className="button cooperation__button">Contact us</button>
                    </NavLink>
                </div>
            </div>
        </div>
        
    )
}

export default Cooperation;