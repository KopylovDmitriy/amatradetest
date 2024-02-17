import Performance from "../../components/Performance/Performance";
import ContactUs from "../../components/ContactUs/ContactUs";


const Packaging = () => {

    const performance = {
        title: "Packaging designing",
		subtitle: "Have a product idea but don't know how to bring it to life?",
		desc: 
			<>
				<p className="performance__desc">Launching new product can be difficult with no help. Our expertise in branding and package design is here to assist you every step of the way</p>
			</>
		,
		className: "performance_short"
    }

    


    return(
        <div className="">
            <Performance content={performance}/>
            <ContactUs />
        </div>
    )
}

export default Packaging;