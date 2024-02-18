import { NavLink } from "react-router-dom"
import { useEffect } from "react"

import OurWorks from "../../components/OurWorks/OurWorks"
import Performance from "../../components/Performance/Performance"
import Services from "../../components/Services/Servecis"
import Cooperation from "../../components/Сooperation/Cooperation"

const Main = () => {

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	  }, []);

	const performance = {
        title: "AMATRADE",
		subtitle: "MARKETPLACES CONSULTING",
		desc: 
			<>
				<p className="performance__desc">Boost your success with our help!<br/>Amazon, Mercado Libre, Jumia, Allegro-we&apos;re ready!</p>
				<p className="performance__desc">Listing, product development, A+ content, brand logos and brand stories – we provide world-class consultancy services to sellers on marketplaces around the world</p>
				<p className="performance__desc">
					Boost your brand presence and increase sales with our tailored solutions!
				</p>
				<NavLink to="/contacts">
					<button className="button cooperation__button">Contact us</button>
				</NavLink>
			</>
		,
		className: "performance"
    }

	return (
		<>
			<Performance content={performance}/>
			<Services />
			<OurWorks />
			<Cooperation /> 
		</>
	)
}

export default Main
