// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Card from "../../components/Card";

const CharactersPage = () => {
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Data fetching for characters page
    useEffect(() => {
        fetchData(setPageData, setIsLoading, "/characters");
    }, []);


    const characters = pageData?.results;

    return isLoading ? (
        <Loader />
    ) : (
        <div className="page-wrapper character-page-wrapper">
            <div className="container">
                <h1>Personnages</h1>
                <div className="grid-container">
                    {characters.map((character) => {
                        return (
                            <Card
                                key={character._id}
                                title={character.name}
                                image_url={character.thumbnail.path + "." + character.thumbnail.extension}
                                path={"/character/" + character._id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CharactersPage;