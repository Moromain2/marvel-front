// Modules imports
import { useParams } from 'react-router-dom'; // Routing
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";

const SingleComicPage = () => {
    // Destructuration of params data
    const { comicId } = useParams();

    // Data and loading states are passed as arguments to the fetchData function which updates them
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Data fetching for character
    useEffect(() => {
        // Fectching character info
        fetchData(setPageData, setIsLoading, `/comic/${comicId}`);
    }, []);

    // `pageData` assignement to `comic` variable 
    const comic = pageData;

    return isLoading ? (
        <Loader />
    ) : (
        <div className="page-wrapper comic-page-wrapper">
            <section id="hero">
                <div className="container">
                    <h1 className='sub-page-title'>{comic.title}</h1>
                </div>
                <div className="image-container">
                    <img
                        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                        alt={comic.title}
                        className="hero-image"
                    />
                </div>
            </section>
            <section id="body">
                <div className="description">
                    <div className="container">
                        <h2>Présentation de {comic.title}</h2>
                        {comic.description ?
                            <p>{comic.description}</p> :
                            <p>{comic.title} est un comic Marvel.</p>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleComicPage;