// Modules imports
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>Marvel App !</h1>
            <hr />
            <Link to="/characters">Personnages</Link><br />
            <br />
            <Link to="/comics">Comics</Link>
        </>
    )
}

export default HomePage;