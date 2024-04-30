import { useEffect } from "react";

import Performance from "../../components/Performance/Performance";
import Galery from "../../components/Gallery/Square/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const Listings = () => {

	useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}, []);

    const performance = {
        title: "Listing Optimisation",
		subtitle: "Give your listings a makeover with our image creation magic!",
		desc: 
			<>
				<p className="performance__desc">Enter a world where your listings not only get noticed, but really attract buyers. Our expertise in compelling product photography ensures your listings shine and stand out. Let&apos;s make your listings stand out from the crowd!</p>
			</>
		,
		className: "performance_short"
    }

    const gallery = [
		{
			img: "./img/carousel/main/Pursanga.webp",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/main/Renaza.webp",
			name: "Renaza",
		},
		{
			img: "./img/carousel/main/Motion-Free.webp",
			name: "Motion-Free",
		},
		{
			img: "./img/carousel/main/Poweronyx.webp",
			name: "Poweronyx",
		},
		{
			img: "./img/carousel/main/Oxys.webp",
			name: "Oxys",
		},
		{
			img: "./img/carousel/main/Sustarox.webp",
			name: "Sustarox",
		},
    ]

    return(
        <div className="page">
            <Performance content={performance} />
            <Galery gallery={gallery} />
            <ContactUs />
        </div>
    )
}

export default Listings;