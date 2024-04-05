// Modules imports
import { useState, useEffect } from 'react' // State management
import { useParams } from 'react-router-dom'; // Routing

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Card from "../../components/Card";

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

    // WIP
    const handlePagination = (action) => {
        let displayClone = { ...display };
        if (action === "next") {
            displayClone.skip += displayClone.limit
            displayClone.currentPage++;
        } else if (action === "previous") {
            displayClone.skip -= displayClone.limit
            displayClone.currentPage--;
        }
        console.log(display);
        setDisplay(displayClone);
        fetchData(setPageData, setIsLoading, `/characters?limit=${display.limit}&skip=${display.skip}&name=${display.name}`);

    }

    // Data fetching for characters page
    useEffect(() => {
        fetchData(setPageData, setIsLoading, `/characters?limit=${display.limit}&skip=${display.skip}&name=${display.name}`);
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
                                body={character.description}
                                image_url={character.thumbnail.path + "." + character.thumbnail.extension}
                                path={"/character/" + character._id}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="container page-navigation">
                <div className="buttons">
                    <button className='button'
                        onClick={() => { handlePagination("previous") }}
                    >
                        Page précédente
                    </button>
                    <button className='button'
                        onClick={() => { handlePagination("next") }}
                    >
                        Page suivante
                    </button>
                </div>
                <p className="page-count">
                    You are on page {display.currentPage} / {Math.ceil(pageData.count / display.limit)}
                </p>
            </div>
        </div>
    )
}

export default CharactersPage;