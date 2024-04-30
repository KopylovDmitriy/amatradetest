import { NavLink } from "react-router-dom"
import { useEffect } from "react"

import OurWorks from "../../components/OurWorks/OurWorks"
import Performance from "../../components/Performance/Performance"
import Services from "../../components/Services/Servecis"
import Cooperation from "../../components/Сooperation/Cooperation"
import Terms from "../../components/Terms/Terms"
import Logos from "../../components/Logos/Logos"
import ContactsUs from "../../components/ContactUs/ContactUs"
import Calls from "../../components/Calls/Calls"

const Main = () => {

	useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}, []);

	const performance = {
        title: "Increase your sales on marketplaces",
		subtitle: "with Amatrade Consulting!",
		desc: 
			<>
				<p className="performance__desc">
					We provide professional design solutions for your business
					Product listing, product development, A+ content, brand logos and more
				</p>
				<NavLink to="/contacts">
					<button className="button cooperation__button">Contact us</button>
				</NavLink>
				<div className="performance__icons">
					<Calls background="black"/>
				</div>
				
			</>
		,
		className: "performance"
    }

	return (
		<>
			<Performance content={performance}/>
			<Logos />
			<Services />
			<OurWorks />
			<Terms />
			<Cooperation />
			<ContactsUs />
		</>
	)
}

export default Main
