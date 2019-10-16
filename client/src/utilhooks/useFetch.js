import {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetch =(url)=>{
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async ()=>{
            setIsLoading(true)
            try {
                const response = await axios(url)
                setResponse(response.data)
                setIsLoading(false)
            } catch(error) {
                setError(error)
            }
        }
        fetchData()
    },[url, error]);
    return { response, loading, error }
}