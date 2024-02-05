import './Services.css';


const Services = () => {

    const servicesList = [
        {
            title: 'Product Listings Images',
            desc: 'Revitalise your listings with our image creation services. We specialise in creating compelling visuals that attract potential buyers. From high-quality product shots to eye-catching lifestyle images, we make your listings shine'
        },
        {
            title: 'A+/A++ content',
            desc: 'Boost your Amazon product listing with our A+ and A++ content creation service! We conduct in-depth research, curate photography styles, design high-quality infographics and create compelling brand stories to enhance your product listings'
        },
        {
            title: 'BRANDING AND PACKAGE DESIGN',
            desc: "Whether you're starting a new brand or improving an existing one, we can help with packaging and branding"
        },
        {
            title: 'Store designs',
            desc: "Do you run your own personal website or shop online? Or you're struggling to highlight the most important parts of your store on a marketplace. We can help!"
        },
        {
            title: 'Social media design',
            desc: 'Our thoughtful designs bring your content to life and help you quickly grow your social media following with professionally designed posts that stand out!'
        },
    ]

    const services = servicesList.map((service, i) => {
        return(
            <div key={i} className="services__item">
                <figure className="services__icon">
                    <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/logo-design.svg" alt="as" />
                </figure>
                <div className="services__info">
                    <h3 className="service__title">{service.title}</h3>
                    <p className="service__desc">{service.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="chapter services">
            <div className="container">
                <div className="title__content">
                    <h2 className="title">What we do</h2>
                </div>
                <div className="services__list">
                   {services}
                </div>
            </div>     
        </div>
    )
}

export default Services;