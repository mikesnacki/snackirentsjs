import React, {useState, useEffect} from 'react';
import { FaCat, FaDog } from 'react-icons/fa';
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import axios from 'axios';

const Properties =()=> {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [properties, setProperties] = useState([])
    const { width } = useWindowDimensions();
    const iconSize = width / 200 + 40;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const result = await axios('http://localhost:4000/properties/')
                setProperties(result.data)
            } catch (error) {
                setIsError(true)
                console.log(isError)
            }
            setIsLoading(false);
        };
    fetchData();
    }, [])

    return(
        (isLoading === true) ?
        (<p>Loading...</p>) :
        (<div className="container-padding flex-row margin-top">
            {properties.map((prop, key) =>
                <div
                className="flex-col property-card" 
                key={key}>
                    <img src={prop.propertyImage} 
                    alt={`${prop.propertyName} is a gorgeous and affordable residence`}></img>
                    <h2>{prop.propertyName}</h2>
                    <h3>{prop.propertyAddress}</h3>
                    <h4>{prop.propertyCity}, {prop.propertyState}, {prop.propertyZip}</h4>
                    <p>{prop.propertyCatsAllowed === "Yes" && <FaCat size={iconSize}/>} 
                    {prop.propertyDogsAllowed ==="Yes" && <FaDog size={iconSize}/>}</p>
                </div>
            )}
        </div>)
    )
}

export default Properties;
