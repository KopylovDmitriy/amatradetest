import Performance from "../../components/Performance/Performance";

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

    


    return(
        <div className="">
            <Performance content={performance}/>
        </div>
    )
}

export default Stores;