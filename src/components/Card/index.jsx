// Modules import
import { Link } from "react-router-dom"
import { useState } from "react";

// Card component CSS import
import "./card.scss";

const Card = ({ title, body, image_url, path, card_size }) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <Link to={path}>
            <div className={card_size === "small" ? "card card-small" : "card"}>
                <div className="image-container">
                    <img src={image_url} alt="" />
                </div>
                <div className="body-container">
                    <h2>{title}</h2>
                    {body &&
                        <>
                            <button
                                onClick={(e) => {
                                    e.preventDefault(); // Preventing the parent link to be triggered
                                    setShowDescription(!showDescription);
                                }}
                                className="button">
                                {showDescription ?
                                    <span>Hide description</span> :
                                    <span>See description</span>
                                }
                            </button>
                            <p className={!showDescription ? "description hidden" : "description"}>{body}</p>
                        </>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Card;