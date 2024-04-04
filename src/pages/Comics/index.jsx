// Modules imports
import { useState, useEffect } from 'react' // State management

// Utils functions imports
import fetchData from "../../utils/fetchData";

// Components imports
import Loader from "../../components/Loader";
import Card from "../../components/Card";

const ComicsPage = () => {
    const [pageData, setPageData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(setPageData, setIsLoading, "/comics");
    }, []);

    const comics = pageData?.results;

    return isLoading ? (
        <Loader />
    ) : (
        <div className="page-wrapper comics-page-wrapper">
            <div className="container">
                <h1>Comics</h1>
                <div className="grid-container">
                    {comics.map((comic) => {
                        console.log(comic);
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
        </div>
    )
}

export default ComicsPage;