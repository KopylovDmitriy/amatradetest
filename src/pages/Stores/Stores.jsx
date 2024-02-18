import Performance from "../../components/Performance/Performance";
import Gallery from "../../components/Gallery/Square/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";

const Stores = () => {

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
			name: "Pursanga",
		},
		{
			img: "./img/carousel/stores/oxys_1.png",
			name: "Poweronyx",
		},
		{
			img: "./img/carousel/stores/incasol.png",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/stores/oxys_2.png",
			name: "Poweronyx",
		},
        {
			img: "./img/carousel/stores/duston.png",
			name: "Pursanga",
		},
		{
			img: "./img/carousel/stores/flemona.png",
			name: "Poweronyx",
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