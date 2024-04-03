// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

const ComicsPage = () => {
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(setPageData, setIsLoading, "/comics");
    }, []);

    const comics = pageData?.results;

    return isLoading ? (
        <>
            <h1>Chargement en cours...</h1>
        </>
    ) : (
        <>
            <h1>Comics</h1>
            <ul>
                {comics.map((comic) => {
                    return (
                        <li key={comic._id}>{comic.title}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default ComicsPage;