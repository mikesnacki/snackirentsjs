import React, {useState} from 'react'

const Slider = ({label, absmin, absmax})=>{
   
    const [sliders, setSliders] = useState({
        selectmin: 8,
        selectmax: 20,
    })

    const multiplier = 100

    const leftSide = (sliders.breakpoint / absmax)
    const rightSide = 1 - (sliders.breakpoint / absmax)

    const styles = {
        left:{
            width: `${leftSide * multiplier}%`
        },
        right: {
            width: `${rightSide * multiplier}%`,
        }
    }

    const changeSlider = (e)=>{
        const name = e.target.name
        let value = e.target.value

        name === "selectmin"
        ? value = parseInt(Math.min(value, sliders.selectmax))
        : value = parseInt(Math.max(value, sliders.selectmin))

        console.log(sliders)

        setSliders(prevState=>({
            ...prevState,
            [name]: value,
        }))

    }

    return(
        <div >
            <label>{label}</label>
            <div>
                <span>{absmin}</span>
                <input 
                    type="range" 
                    className="slider-lower" 
                    value={sliders.selectmin} 
                    name ="selectmin" 
                    min={absmin} 
                    max={sliders.selectmax-1} 
                    onChange={changeSlider}
                    style={styles.left}
                />
                <input 
                    type="range" 
                    className="slider-upper" 
                    value={sliders.selectmax} 
                    name ="selectmax" 
                    min={sliders.selectmin+1} 
                    max={absmax} 
                    onChange={changeSlider}
                    style={styles.right}
                />
                <span>{absmax}</span>
            </div>
        </div>
    )
}

export default Slider