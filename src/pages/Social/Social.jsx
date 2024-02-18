import Gallery from "../../components/Gallery/Square/Gallery";
import Performance from "../../components/Performance/Performance";
import ContactUs from "../../components/ContactUs/ContactUs";


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
			img: "./img/carousel/social/1.png",
			name: "post_1",
		},
		{
			img: "./img/carousel/social/2.png",
			name: "post_2",
		},
		{
			img: "./img/carousel/social/3.png",
			name: "post_3",
		},
		{
			img: "./img/carousel/social/4.png",
			name: "post_4",
		},
		{
			img: "./img/carousel/social/6.png",
			name: "post_5",
		},
		{
			img: "./img/carousel/social/5.png",
			name: "post_6",
		}
    ]

    return(
        <div className="page">
            <Performance content={performance}/>
            <Gallery gallery={gallery} />
			<ContactUs />
        </div>
    )
}

export default Social;