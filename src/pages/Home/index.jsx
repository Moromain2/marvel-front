// Modules imports
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="page-wrapper home-page-wrapper">
            <div className="container">
                <h1>Marvel App !</h1>
                <hr />
                <Link to="/characters">Personnages</Link><br />
                <br />
                <Link to="/comics">Comics</Link>
            </div>
        </div>
    )
}

export default HomePage;