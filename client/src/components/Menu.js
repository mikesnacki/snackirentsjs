import React, {useState} from 'react'
import Slider from "./Slider"

const Menu =()=>{
    const [menu, showMenu] = useState(true)

    const [selections, setSelections] = useState({
                                                propertyCity: null,
                                                RentMin: 25,
                                                RentMax: 75,
                                                SqftMin: 25,
                                                SqftMax: 75,
                                                absmin: 0,
                                                absmax: 100,
                                                propertyCatsAllowed: true,
                                                propertyDogsAllowed: true,
                                                })

    const {propertyCatsAllowed, propertyDogsAllowed} = selections                                            
    
    const sliderFields = ["Rent", "Sqft"]

    const setMenu =()=>{
        showMenu(!menu)
    }
    
    const setVals =(e)=>{
        const name = e.currentTarget
        let val;

    (name === "propertyCatsAllowed") 
    ? val = propertyCatsAllowed
    : val = propertyDogsAllowed

        setSelections(prevState=>({
            ...prevState,
            [name]: !val
        }))
    }

    const changeSlider = (e)=>{
        
        const name = e.currentTarget.name
        let value = e.currentTarget.value

        setSelections(prevState=>({
            ...prevState,
            [name]: parseInt(value),
        }))
    }

    return(
        <div >
            {
                menu && (
                    <div className="flex-row margin-top space-evenly flex-row-center">
                        <button className="menu-button menu-button-active">City</button>
                        {
                            sliderFields.map((sliderField, index)=>(
                                <Slider
                                key={index}
                                label={sliderField}
                                name={sliderField}
                                absmin={selections.absmin} 
                                absmax={selections.absmax}
                                selectmin={selections[`${sliderField}Min`]} 
                                selectmax={selections[`${sliderField}Max`]} 
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