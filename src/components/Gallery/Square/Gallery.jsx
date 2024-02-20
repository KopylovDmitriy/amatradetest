import './Gallery.css';

// eslint-disable-next-line react/prop-types
const Gallery = ({gallery}) => {

    // eslint-disable-next-line react/prop-types
    const images = gallery.map((img) => {
        return (
            <div key={img.name} className="gallery__item">
                <img src={img.img} alt={img.name} className="gallery__img" />
            </div>
        )
    })

    return (
        <>
            <div className="gallery">
                <div className="gallery__wrapper">
                    {images}
                </div>
            </div>
        </>
    )
}

export default Gallery;