// Modules import
import { Link } from "react-router-dom"

/* Card component CSS import */
import "./card.scss";

const Card = ({ title, body, image_url, path, card_size }) => {
    return (
        <Link to={path}>
            <div className={card_size === "small" ? "card card-small" : "card"}>
                <div className="image-container">
                    <img src={image_url} alt="" />
                </div>
                <div className="body-container">
                    <h2>{title}</h2>
                    {body &&
                        <p>{body}</p>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Card;