/* Carousel component CSS import */
import "./carousel.scss";

const Carousel = ({ children }) => {
    return (
        <div className="carousel">
            {children}
        </div>
    )
}

export default Carousel;