import React from 'react';
import { FaCat, FaDog } from 'react-icons/fa';
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import {useFetch} from "../utilhooks/useFetch"

const Properties =()=> {

    let properties = []
    const { width } = useWindowDimensions();
    const iconSize = width / 200 + 40;
    const url = 'http://localhost:4000/properties/'
    const res = useFetch(url)
    if (!res.error) { properties = res.response } else {console.log(res.error)}

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
