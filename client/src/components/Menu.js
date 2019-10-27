import React, {useState} from 'react'
import Slider from "./Slider"

const Menu =()=>{
    const [menu, showMenu] = useState(true)
    const [selections, setSelections] = useState({
                                                propertyCity: null,
                                                propertyState: null,
                                                propertyStudioRent:null,
                                                propertyStudioSqft: null,
                                                propertyOneBedroomRent: null,
                                                propertyOneBedroomSqft: null,
                                                propertyCatsAllowed: false,
                                                propertyDogsAllowed: false,
                                                })

    const [sliders, setSliders] = useState({
        absmin: 0,
        absmax: 100,
        selectmin: 25,
        selectmax: 75,
    })

    const setMenu =()=>{
        showMenu(!menu)
    }
    
    const setVals =(e)=>{
        const name = e.target.name
        let val;

    (name === "propertyCatsAllowed") 
    ? val = selections.propertyCatsAllowed
    : val = selections.propertyDogsAllowed

        setSelections(prevState=>({
            ...prevState,
            [name]: !val
        }))
    }

    const {propertyCatsAllowed, propertyDogsAllowed} = selections

    return(
        <div >
            {
                menu && (
                    <div className="flex-row margin-top space-evenly">
                        <button>City</button>
                        <button>State</button>
                        <button>Rent</button>
                        <Slider 
                            label="Sqft"
                            name="sqft"
                            absmin={sliders.absmin} 
                            absmax={sliders.absmax} 
                            />
                        <button 
                            name="propertyCatsAllowed" 
                            value={selections.propertyCatsAllowed}
                            className={selections.propertyCatsAllowed 
                            ? "menu-button menu-button-active" 
                            : "menu-button menu-button-inactive"}
                            onClick={setVals}>
                                {propertyCatsAllowed ? "Cats" : "No Cats"}
                        </button>
                        <button 
                            name ="propertyDogsAllowed" 
                            value={selections.propertyDogsAllowed}
                            className={selections.propertyDogsAllowed 
                            ? "menu-button menu-button-active" 
                            : "menu-button menu-button-inactive"}
                            onClick={setVals}>
                                {propertyDogsAllowed ? "Dogs" : "No Dogs"}
                        </button>
                    </div>
                )
            }
            <button className={menu ? "arrow arrow-down flex-row" : "arrow arrow-up flex-row"} onClick={setMenu}></button>
        </div>
    )
}

export default Menu;