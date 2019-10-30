import {useState, useEffect} from 'react'

export const useFetch =(url)=>{
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async ()=>{
            setIsLoading(true)
            try {
                fetch(url)
                .then(res=> res.json())
                .then(data=>setResponse(data))
                setIsLoading(false)
            } catch(error) {
                setError(error)
            }
        }
        fetchData()
    },[url, loading, error]);
    return { response, loading, error }
}