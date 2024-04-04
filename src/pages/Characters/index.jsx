// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

const CharactersPage = () => {
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Data fetching for characters page
    useEffect(() => {
        fetchData(setPageData, setIsLoading, "/characters");
    }, []);


    const characters = pageData?.results;

    return isLoading ? (
        <>
            <h1>Chargement en cours...</h1>
        </>
    ) : (
        <div className="page-wrapper character-page-wrapper">
            <div className="container">

                <h1>Personnages</h1>
                <ul>
                    {characters.map((character) => {
                        return (
                            <li key={character._id}>{character.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CharactersPage;