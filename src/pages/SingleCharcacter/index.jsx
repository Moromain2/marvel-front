// Modules imports
import { useParams } from 'react-router-dom'; // Routing
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const SingleCharacterPage = () => {
    // Destructuration of params data
    const { characterId } = useParams();

    // Data and loading states are passed as arguments to the fetchData function which updates them
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    console.log(characterId);

    // Data fetching for character
    useEffect(() => {
        // Fectching character info
        fetchData(setPageData, setIsLoading, `/comics/${characterId}`);
    }, []);

    const character = pageData;

    console.log(pageData);

    return isLoading ? (
        <Loader />
    ) : (
        <div className="page-wrapper character-page-wrapper">
            <section id="hero">
                <div className="container">
                    <h1 className="sub-page-title">{character.name}</h1>
                </div>
                <div className="image-container">
                    <img
                        src={character.thumbnail.path + "." + character.thumbnail.extension}
                        alt={character.name}
                        className="hero-image"
                    />
                </div>
            </section>
            <section id="body">
                <div className="description">
                    <div className="container">
                        <h2>À propos de {character.name}</h2>
                        {character.description ?
                            <p>{character.description}</p> :
                            <p>{character.name} est un super-héro de Marvel.</p>
                        }
                    </div>
                </div>
                <div className="comics-list">
                    <div className="container">
                        <h2>Comics avec {character.name}</h2>
                        <Carousel>
                            {character.comics.map((comic) => {
                                return (
                                    <Card
                                        key={comic._id}
                                        title={comic.title}
                                        image_url={comic.thumbnail.path + "." + comic.thumbnail.extension}
                                        path={`/comic/${comic._id}`}
                                        card_size="small"
                                    />
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleCharacterPage;