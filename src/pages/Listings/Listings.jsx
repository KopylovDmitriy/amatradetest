import { useEffect } from "react";

import Performance from "../../components/Performance/Performance";
import Galery from "../../components/Gallery/Square/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const Listings = () => {

	useEffect(() => {
		// 👇️ scroll to top on page load
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
			img: "./img/carousel/main/Pursanga.png",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/main/Poweronyx.png",
			name: "Poweronyx",
		},
		{
			img: "./img/carousel/main/Ecolait.png",
			name: "Ecolait",
		},
		{
			img: "./img/carousel/main/Sustarox.png",
			name: "Sustarox",
		},
		{
			img: "./img/carousel/main/Yaconia.png",
			name: "Yaconia",
		},
		{
			img: "./img/carousel/main/Incas_Protect.png",
			name: "Incas_Protect",
		}
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