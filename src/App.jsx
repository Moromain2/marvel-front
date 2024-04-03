import axios from 'axios'
import { useEffect } from 'react'

import './App.css'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--marvel-back--hcj2xjlwfzkm.code.run/comics");
        console.log("data >>> ", response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <h1>Marvel app</h1>
    </>
  )
}

export default App
