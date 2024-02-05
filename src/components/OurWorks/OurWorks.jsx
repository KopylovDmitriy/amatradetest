import './OurWorks.css';

const OurWorks = () => {

    const imagesList = [
        {
            img: '../img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: '../img/3_4.png',
            name: 'Incasol',
            color: 'images_lutevid',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: '../img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: './img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: './img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: './img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: './img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        },
        {
            img: './img/3_4.png',
            name: 'Incasol',
            color: 'images_incasol',
            link: 'https://www.amazon.com.mx/Incasol-Vitality-Suplemento-Presi%C3%B3n-Arterial/dp/B0C5N6BXX8/ref=sr_1_1?keywords=incasol&qid=1707055478&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47'
        }
    ]

    const images = imagesList.map((image, i) => {
        return(
            <a key={i} href={image.link} id={image.name + i} className={"images__item " + image.color}>
                <img className="images__img" src={image.img} alt={image.name} />
                <div className="images__caption">
                    <h3 className="images__desc">{image.name}</h3>
                </div>
            </a>
        )
    })

    return(
        <div className="chapter">
            <div className="title__content">
                    <h2 className="title">HOW WE DO</h2>
                </div>
            <div className="container">
            <div className="images">
                {images}
            </div>
            </div>
            
        </div>
    )
}

export default OurWorks;