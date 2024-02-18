import './Gallery.css';

const Gallery = ({gallery}) => {

    const images = gallery.map((img) => {
        return (
            <div key={img} className="gallery__item">
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