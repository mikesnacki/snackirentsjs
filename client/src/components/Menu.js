import React, {useState} from 'react'
import Slider from "./Slider"

const Menu =({selections, setSelections})=>{
    const [menu, showMenu] = useState(false)

    const {propertyCatsAllowed, propertyDogsAllowed} = selections                                            
    
    const sliderFields = ["Rent", "Sqft"]

    const setMenu =()=>{
        showMenu(!menu)
    }
    
    const setVals =(e)=>{
        const name = e.target.name
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
            [`user${name}`]: parseInt(value),
        }))
    }

    return(
        <div className={`property-filters property-filters-${menu}`}>
            {
                menu && (
                    <div className="flex-row margin-top space-evenly flex-row-center">
                        <h2>Property Filters</h2>
                        {
                            sliderFields.map((sliderField, index)=>(
                                <Slider
                                key={index}
                                label={sliderField}
                                name={`user${sliderField}`}
                                absmin={selections[`abs${sliderField}Min`]} 
                                absmax={selections[`abs${sliderField}Max`]}
                                selectmin={selections[`user${sliderField}Min`]} 
                                selectmax={selections[`user${sliderField}Max`]} 
                                changeSlider={changeSlider}
                                />
                            ))
                        }
                        <button 
                            name="propertyCatsAllowed" 
                            value={propertyCatsAllowed}
                            className={selections.propertyCatsAllowed 
                            ? "menu-button menu-button-active" 
                            : "menu-button menu-button-inactive"}
                            onClick={setVals}>
                                {propertyCatsAllowed ? "Cats" : "No Cats"}
                        </button>
                        <button 
                            name ="propertyDogsAllowed" 
                            value={propertyDogsAllowed}
                            className={selections.propertyDogsAllowed 
                            ? "menu-button menu-button-active" 
                            : "menu-button menu-button-inactive"}
                            onClick={setVals}>
                                {propertyDogsAllowed ? "Dogs" : "No Dogs"}
                        </button>
                    </div>
                )
            }
            {!menu &&<h2 className="align-center">Click to Show Filters</h2>}
            <button className={menu ? "arrow arrow-down flex-row" : "arrow arrow-up flex-row"} onClick={setMenu}></button>
        </div>
    )
}

export default Menu;