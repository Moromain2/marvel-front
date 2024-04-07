// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const CharactersPage = () => {
    // Data and loading states are passed as arguments to the fetchData function which updates them
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Setting a display object with a default state set the API querries
    const [display, setDisplay] = useState({
        limit: 100,
        skip: 0,
        currentPage: 1,
        name: "",
    })

    // Data fetching when characters page component renders
    useEffect(() => {
        fetchData(setPageData, setIsLoading, `/characters?limit=${display.limit}&skip=${display.skip}&name=${display.name}`);
    }, [display]); // Display object is passed as a dependency of the use effect function

    // Character variable is assigned to the API call results
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
                                body={character.description}
                                image_url={character.thumbnail.path + "." + character.thumbnail.extension}
                                path={"/character/" + character._id}
                            />
                        )
                    })}
                </div>
            </div>
            <Pagination display={display} setDisplay={setDisplay} pageData={pageData} fetchData={fetchData} setPageData={setPageData} setIsLoading={setIsLoading} />
        </div>
    )
}

export default CharactersPage;