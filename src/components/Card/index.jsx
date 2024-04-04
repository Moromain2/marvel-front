// Modules import
import { Link } from "react-router-dom"

/* Card component CSS import */
import "./card.scss";

const Card = ({ title, body, image_url, path }) => {
    return (
        <Link to={path}>
            <div className="card">
                {/* {!image_url.includes("image_not_available") && */}
                <div className="image-container">
                    <img src={image_url} alt="" />
                </div>
                {/* } */}
                <div className="body-container">
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Card;