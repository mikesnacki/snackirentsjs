import React, {useState, useEffect} from 'react';
import axios from 'axios'

const deleteProperty=(id)=>{
    axios
        .delete(`http://localhost:4000/properties/delete/${id}`)
    
}

export const Property=(property)=> {

    return(
        <div className="flex-row admin-row">
            <div className="flex-col space-evenly"><input value={property.property.propertyName} placeholder="Name"/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyAddress} placeholder="Address"/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyCity} placeholder="City"/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyState} placeholder="State"/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyZip} placeholder="Zip"/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyStudioUnitsRented}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyStudioUnits}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyOneBedroomUnitsRented}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyOneBedroomUnits}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyCatsAllowed}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyDogsAllowed}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyDescription}/></div>
            <div className="flex-col space-evenly"><input value={property.property.propertyImage}/></div>
            <div className="flex-col space-evenly"><button>Edit</button></div>
            <div className="flex-col space-evenly"><button onClick={()=>deleteProperty(property.property._id)}>Delete</button></div>
            {/* <div className="flex-col space-evenly"><Link to={`/edit/$<input value={property.property.propertyId}`}>Edit</Link></div> */}
        </div>
    )
}

const EditProperties = ()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [properties, setProperties] = useState([])

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
        <div className="admin">
        <h2 className="align-center">Properties</h2>
           {
               properties.length > 0 || properties.length != null ?
               properties.map((property, index)=>(
                <Property
                property={property}
                key={index}
                />
           ))
           : null
        } 
        </div>
    )
}

export default EditProperties;