import { useEffect } from "react";

import Performance from "../../components/Performance/Performance";
import Gallery from "../../components/Gallery/Square/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const Stores = () => {

    useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}, []);

    const performance = {
        title: "Store Building",
		subtitle: "Are you ready to elevate your online presence and launch your dream store on a marketplace?",
		desc: 
			<>
				<p className="performance__desc">Whether you&apos;re operating a personal website or online shop, we&apos;re here to assist! Let us guide you in making your store stand out in the bustling digital marketplace</p>
			</>
		,
		className: "performance_short"
    }

    const gallery = [
		{
			img: "./img/carousel/stores/lutevid.png",
			name: "lutevid",
		},
		{
			img: "./img/carousel/stores/oxys_1.png",
			name: "osyx_1",
		},
		{
			img: "./img/carousel/stores/incasol.png",
			name: "incasol",
		},
		{
			img: "./img/carousel/stores/oxys_2.png",
			name: "oxys_2",
		},
        {
			img: "./img/carousel/stores/duston.png",
			name: "duston",
		},
		{
			img: "./img/carousel/stores/flemona.png",
			name: "flemona",
		},
    ]

    return(
        <div className="page">
            <Performance content={performance}/>
            <Gallery gallery={gallery}/>
            <ContactUs />
        </div>
    )
}

export default Stores;