import { useEffect } from "react";

import Performance from "../../components/Performance/Performance";
import ContactUs from "../../components/ContactUs/ContactUs";
import Gallery from "../../components/Gallery/Square/Gallery";

const APlus = () => {

    useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}, []);

    const performance = {
        title: "А+ Content",
		subtitle: "Are you a brand owner on Amazon?",
		desc: 
			<>
				<p className="performance__desc">The value of A+ content cannot be overstated - enhance your product listings with our premium A+ content. We select the most eye-catching designs and compelling brand stories to captivate and engage your audience</p>
			</>
		,
		className: "performance_short"
    }

    const gallery = [
		{
			img: "./img/carousel/a+/incasol_1.webp",
			name: "incasol pro",
		},
		{
			img: "./img/carousel/a+/duston.webp",
			name: "duston gel",
		},
		{
			img: "./img/carousel/a+/incasol_2.webp",
			name: "incasol",
		},
    ]

    return(
        <div className="page">
            <Performance content={performance}/>
            	<Gallery gallery={gallery} />
			<ContactUs />
        </div>
    )
}

export default APlus;