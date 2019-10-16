import React from 'react';
import { FaCat, FaDog, FaBed, FaBath, FaWifi } from 'react-icons/fa';
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import {useFetch} from "../utilhooks/useFetch"

const Properties =()=> {

    let properties = []
    const { width } = useWindowDimensions();
    const iconSize = width / 400 + 30;
    const url = 'http://localhost:4000/properties/'
    const res = useFetch(url)
    if (!res.error) { properties = res.response } else {
        console.log(res.error)
        return(
            <p>Sorry, there's been an error on our end</p>
        )
    }

    return(
        (res.loading || res.error) ?
        (<p>Loading...</p>) :
        (<div className="container-padding flex-row margin-top">
            {properties.map((prop, key) =>
                <div
                className="flex-col property-card" 
                key={key}>
                    <img src={prop.propertyImage} 
                    alt={`${prop.propertyName} is a gorgeous and affordable residence`}
                    style={{width: 200, height: 200, marginTop:20, borderRadius:5}}
                    ></img>
                    <h2>{prop.propertyName}</h2>
                    <p>{prop.propertyAddress}</p>
                    <p>{prop.propertyCity}, {prop.propertyState}, {prop.propertyZip}</p>
                    <p>{prop.propertyStudioUnits-prop.propertyStudioUnitsRented > 0 && "Studios available"}</p>
                    <p>{prop.propertyOneBedroomUnits-prop.propertyOneBedroomUnitsRented > 0 && "One bedrooms available"}</p>
                    <p>{Math.min(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} - 
                    {Math.max(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} Square feet</p>
                    <p>${Math.min(prop.propertyStudioRent, prop.propertyOneBedroomRent)} - 
                    {Math.max(prop.propertyStudioRent, prop.propertyOneBedroomRent)}</p>
                    <p>{prop.propertyCatsAllowed === "Yes" && <FaCat size={iconSize}/>} 
                    {prop.propertyDogsAllowed ==="Yes" && <FaDog size={iconSize}/>}</p>
                </div>
            )}
        </div>)
    )
}

export default Properties;
