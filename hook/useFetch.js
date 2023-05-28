import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      "X-RapidAPI-Key": //Your api key,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async ()=>{
     (true);
    try{
        const response = await axios.request(options);
        setData(response.data.data);
    }catch(e){
        setError(e)
        alert(e)
    }finally{
        setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchData();
  })

  const refetch = ()=>{
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch}
};

export default useFetch;

// "8fb2f2e80fmsh9e61083559af906p173e00jsnf26c991fbb77"