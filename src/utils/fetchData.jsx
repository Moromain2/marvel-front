// Modules imports
import axios from 'axios' // Data fetching

const fetchData = async (setPageData, setIsLoading, apiEndpoint) => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + apiEndpoint);
        setPageData(response.data);
        setIsLoading(false);
    } catch (error) {
        console.log(error.message)
    }
}

export default fetchData;