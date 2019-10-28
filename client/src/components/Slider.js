import React from 'react'

const Slider = ({label, absmin, absmax, selectmin, selectmax, changeSlider})=>{
   
    const breakpoint = (selectmin + selectmax) / 2
    const multiplier = 100
    const subtractor = 1

    const leftSide = (breakpoint / absmax) * multiplier - subtractor
    const rightSide = (1 - (breakpoint / absmax)) * multiplier - subtractor

    const styles = {
        left:{
            width: `${Math.max(+leftSide, 0)}%`,
            margin: "0 auto"
        },
        right: {
            width: `${Math.max(+rightSide, 0)}%`,
            margin: "0 auto"
        }
    }

    return(
        <div 
        label={label}
        className="slider-container">
            <label className="flex-row flex-row-text-center ">{label}</label>
            <div className="flex-row space-between">
                <span>{selectmin}</span>
                <span>{selectmax}</span>
            </div>
            <div className="flex-row align-center slider-line">
                <input 
                    type="range" 
                    className="slider slider-lower" 
                    value={selectmin} 
                    name ={`selectmin`} 
                    min={absmin} 
                    max={selectmax-1} 
                    onChange={changeSlider}
                    style={styles.left}
                />
                <input 
                    type="range" 
                    className="slider slider-upper" 
                    value={selectmax} 
                    name={`selectmax`} 
                    min={selectmin+1} 
                    max={absmax} 
                    onChange={changeSlider}
                    style={styles.right}
                />
            </div>
        </div>
    )
}

export default Slider