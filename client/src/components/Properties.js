import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import { FaCat, FaDog, } from 'react-icons/fa';
import { useWindowDimensions } from "../utilhooks/useWindowDim"
import {useFetch} from "../utilhooks/useFetch"
import ContactModal from "./ContactModal"
const url = process.env.REACT_APP_API_URL

const calc = (x, y) => [-(y - window.innerHeight / 2) / 400, (x - window.innerWidth / 2) / 400, 1.03]
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Properties =()=> {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const [modal, setModal] = useState(false)
    const [property, setProperty] = useState(null)
    let properties = []
    const { width } = useWindowDimensions();
    const iconSize = width / 400 + 26;
    const res = useFetch(url)
    if (!res.error) { properties = res.response } else {
        console.log(res.error)
        return(
            <p>Sorry, there's been an error on our end</p>
        )
    }

    const displayModal =(propertyName)=>{
        setProperty(propertyName)
        setModal(!modal)
    }

    return(
        (res.loading || res.error) ?
        (<p className="align-center">Loading...</p>) :
        (<div className="container-padding flex-row margin-top">
            {properties.map((prop, key) =>
                <animated.div
                className="flex-col property-card" 
                key={key}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{transform: props.xys.interpolate(trans)}}
                >
                    <img src={prop.propertyImage} 
                    alt={`${prop.propertyName} is a gorgeous and affordable residence`}
                    style={{width: 200, height: 200, marginTop:20, borderRadius:5,}}
                    ></img>
                    <h2 value="propertyName">{prop.propertyName}</h2>
                    <p>{prop.propertyAddress}</p>
                    <p>{prop.propertyCity}, {prop.propertyState}, {prop.propertyZip}</p>
                    <p>{prop.propertyStudioUnits-prop.propertyStudioUnitsRented > 0 && "Studios available"} {prop.propertyOneBedroomUnits-prop.propertyOneBedroomUnitsRented > 0 && ", One bedrooms available"}</p>
                    <p>{Math.min(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} - 
                    {Math.max(prop.propertyStudioSqft, prop.propertyOneBedroomSqft)} Square feet</p>
                    <p>${Math.min(prop.propertyStudioRent, prop.propertyOneBedroomRent)} - 
                    {Math.max(prop.propertyStudioRent, prop.propertyOneBedroomRent)}</p>
                    <p>{prop.propertyCatsAllowed === "Yes" && <FaCat size={iconSize}/>} 
                    {prop.propertyDogsAllowed ==="Yes" && <FaDog size={iconSize}/>}</p>
                    <button onClick={()=>displayModal(prop.propertyName)}className="button-clear">Contact an associate</button>
                </animated.div>
            )}
        <ContactModal 
        show={modal}
        displayModal={displayModal}
        property={property}
        />
        </div>)
    )
}

export default Properties;
