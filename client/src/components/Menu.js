import React, {useState} from 'react'
import Slider from "./Slider"

const Menu =()=>{
    const [menu, showMenu] = useState(true)

    const [selections, setSelections] = useState({
                                                propertyCity: null,
                                                propertyState: null,
                                                unitRent: {
                                                    minRent: null,
                                                    maxRent: null
                                                },
                                                unitSqft: {
                                                    minSqft: null,
                                                    maxSqft: null
                                                },
                                                propertyCatsAllowed: true,
                                                propertyDogsAllowed: true,
                                                })

    const {propertyCatsAllowed, propertyDogsAllowed} = selections                                            

    const [sliders, setSliders] = useState({
        absmin: 0,
        absmax: 100,
        selectmin: 25,
        selectmax: 75,
    })

    const {absmin, absmax, selectmin, selectmax} = sliders
    
    const sliderFields = ["Rent", "Sqft"]

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

    const changeSlider = (e)=>{
        
        const name = e.target.name
        let value = e.target.value
        let index = e.target.index

        name === "selectmin"
        ? value = parseInt(Math.min(value, selectmax))
        : value = parseInt(Math.max(value, selectmin))

        setSliders(prevState=>({
            ...prevState,
            [name]: value,
        }))

        console.log(index)
    }

    return(
        <div >
            {
                menu && (
                    <div className="flex-row margin-top space-evenly flex-row-center">
                        <button className="menu-button">City</button>
                        <button className="menu-button">State</button>
                        {
                            sliderFields.map((sliderField, index)=>(
                                <Slider
                                label={sliderField}
                                name={sliderField}
                                key={index}
                                absmin={absmin} 
                                absmax={absmax}
                                selectmin={selectmin}
                                selectmax={selectmax}
                                changeSlider={changeSlider}
                                />
                            ))
                        }
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