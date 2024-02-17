import Gallery from "../../components/Gallery/Gallery";
import Performance from "../../components/Performance/Performance";

const Social = () => {

    const performance = {
        title: "Social Media",
		subtitle: "Looking to make your social media profiles irresistible?",
		desc: 
			<>
				<p className="performance__desc">With our help, your posts will be transformed into eye-catching masterpieces! Watch your growing follower base with designs that are not just beautiful but truly distinctive</p>
			</>
		,
		className: "performance_short"
    }

    const gallery = [
        {
			img: "./img/carousel/main/RetinOn.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Lutevid.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Ecolait.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Poweronyx.png",
			name: "Incasol",
		},
		
		{
			img: "./img/carousel/main/Pursanga.png",
			name: "Incasol",
		},
		{
			img: "./img/carousel/main/Sustarox.png",
			name: "Incasol",
		},
    ]

    return(
        <div className="">
            <Performance content={performance}/>
            <Gallery gallery={gallery} />
        </div>
    )
}

export default Social;