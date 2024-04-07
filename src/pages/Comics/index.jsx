// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const ComicsPage = ({ search }) => {
    // Data and loading states are passed as arguments to the fetchData function which updates them
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    console.log("search >>> ", search);

    // Setting a display object with a default state set the API querries
    const [display, setDisplay] = useState({
        limit: 100,
        skip: 0,
        currentPage: 1,
        title: "",
    })

    // Data fetching when comics page component renders
    useEffect(() => {
        console.log("comics page renders");
        fetchData(setPageData, setIsLoading, `/comics?limit=${display.limit}&skip=${display.skip}&title=${display.title}`);
    }, [display]); // Display object is passed as a dependency of the use effect function

    // Comics variable is assigned to the API call results
    const comics = pageData?.results;

    return isLoading ? (
        <Loader />
    ) : (
        <div className="page-wrapper comics-page-wrapper">
            <div className="container">
                <h1>Comics</h1>
                <div className="grid-container">
                    {comics.map((comic) => {
                        return (
                            <Card
                                key={comic._id}
                                title={comic.title}
                                image_url={comic.thumbnail.path + "." + comic.thumbnail.extension}
                                path={"/comic/" + comic._id}
                            />
                        )
                    })}
                </div>
            </div>
            <Pagination display={display} setDisplay={setDisplay} pageData={pageData} fetchData={fetchData} setPageData={setPageData} setIsLoading={setIsLoading} />
        </div>
    )
}

export default ComicsPage;