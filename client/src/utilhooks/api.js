// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const GetProperties =()=>{
//     const [isLoading, setIsLoading] = useState(false)
//     const [isError, setIsError] = useState(false)
//     const [properties, setProperties] = useState([])
    
//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             setIsError(false);
//             try {
//                 const result = await axios('http://localhost:4000/properties/')
//                 setProperties(result.data)
//             } catch (error) {
//                 setIsError(true)
//                 console.log(isError)
//             }
//             setIsLoading(false);
//         };
//     fetchData();
//     }, [])
// }
