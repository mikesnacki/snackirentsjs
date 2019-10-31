import React from 'react'

const Slider = ({label, absmin, absmax, selectmin, selectmax, changeSlider})=>{
   
    const breakpoint = (selectmin + selectmax) / 2
    const multiplier = 300
    const subtractor = 25

    const leftSide = (Math.max(((selectmin-absmin) / (absmax-absmin))* multiplier, 40))/multiplier*100 
    const rightSide = (Math.min(((absmax- absmin) / (absmax - absmin))* multiplier))/multiplier*100 - leftSide
    const delta = selectmax - selectmin

    console.log(leftSide, rightSide, leftSide + rightSide, delta)
    const styles = {
        left:{
            width: `${+leftSide}%`,
        },
        right: {
            width: `${+rightSide}%`,
        },
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
            <div className="flex-row-no-wrap space-evenly slider-line">
                <input 
                    type="range" 
                    className="slider slider-lower" 
                    value={selectmin} 
                    name ={`${label}Min`} 
                    min={absmin} 
                    max={selectmax-1} 
                    onChange={changeSlider}
                    style={styles.left}
                />
                <span className="middle"></span>
                <input 
                    type="range" 
                    className="slider slider-upper" 
                    value={selectmax} 
                    name={`${label}Max`} 
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