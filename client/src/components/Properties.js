import React, {useState} from 'react';
import { FaCat, FaDog, } from 'react-icons/fa';
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import {useFetch} from "../utilhooks/useFetch"
import ContactModal from "./ContactModal"
import Loading from "./Loading"
import Error from "./Error"
import Menu from "./Menu"

const Properties =()=> {

    let properties = []
    const [modal, setModal] = useState(false)
    const [property, setProperty] = useState(null)
    const [selections, setSelections] = useState({
                                                    userRentMin: 825,
                                                    userRentMax: 1445,
                                                    userSqftMin: 625,
                                                    userSqftMax: 980,
                                                    absRentMin: 825,
                                                    absRentMax: 1445,
                                                    absSqftMin: 625,
                                                    absSqftMax: 980,
                                                    propertyCatsAllowed: false,
                                                    propertyDogsAllowed: false,
                                                })

    const { width } = useWindowDimensions();
    const iconSize = width / 400 + 26;
    
    const res = useFetch(`/api/properties`)
    if (!res.error) { 
        properties = res.response
        properties = properties.filter(property => 
            ((selections.propertyCatsAllowed 
            ? property.propertyCatsAllowed === true 
            : (property.propertyCatsAllowed === true || property.propertyCatsAllowed === false))
            && (selections.propertyDogsAllowed 
            ? property.propertyDogsAllowed === true 
            : (property.propertyDogsAllowed === true || property.propertyDogsAllowed === false)))
            && (property.propertyStudioSqft > selections.userSqftMin ||  property.propertyOneBedroomSqft > selections.userSqftMin)
            && (property.propertyStudioSqft < selections.userSqftMax||  property.propertyOneBedroomSqft < selections.userSqftMax)
            && (+property.propertyStudioRent > +selections.userRentMin || property.propertyOneBedroomRent > selections.userRentMin)
            && (+property.propertyStudioRent < +selections.userRentMax || property.propertyOneBedroomRent < selections.userRentMax)
            )
     } else {
        return(
            <p>Sorry, there's been an error on our end</p>
        )
    }

    const displayModal =(propertyName)=>{
        setProperty(propertyName)
        setModal(!modal)
    }

    return(
        (res.loading) 
        ? (<Loading/>) 
        : (res.error)
        ? (<Error/>) 
        : (
        <div className="container-padding properties-container ">
        <Menu 
        selections={selections}
        setSelections={setSelections}
        />
        <div className="flex-row">
            {
            properties.map((prop, key) =>
                <div
                id={key}
                key={key}
                className="flex-col property-card" 
                name={prop.property} 
                >
                    <img 
                    src={prop.propertyImage} 
                    alt={`${prop.propertyName} is a gorgeous and affordable residence`}
                    style={{width: 200, height: 200, marginTop:20, borderRadius:5,}}
                    ></img>
                    <h2 value="propertyName">{prop.propertyName}</h2>
                    <p>{prop.propertyAddress}</p>
                    <p>{prop.propertyCity}, {prop.propertyState}, {prop.propertyZip}</p>
                    <p>{prop.propertyStudioUnits-prop.propertyStudioUnitsRented > 0 && "Studios available"} 
                    {prop.propertyOneBedroomUnits-prop.propertyOneBedroomUnitsRented > 0 && ", One bedrooms available"}</p>
                    <p>{Math.min(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} - 
                    {Math.max(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} Square feet</p>
                    <p>${Math.min(prop.propertyStudioRent, prop.propertyOneBedroomRent)} - 
                    {Math.max(prop.propertyStudioRent, prop.propertyOneBedroomRent)}</p>
                    <p>{prop.propertyCatsAllowed  && <FaCat size={iconSize}/>} 
                    {prop.propertyDogsAllowed && <FaDog size={iconSize}/>}</p>
                    <button onClick={()=>displayModal(prop.propertyName)}className="button-clear">Contact an associate</button>
                </div>
            )}
        <ContactModal 
        show={modal}
        displayModal={displayModal}
        property={property}
        />
        </div>
        </div>)
    )
}

export default Properties;
