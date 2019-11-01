import React from 'react'

const Slider = ({label, absmin, absmax, selectmin, selectmax, changeSlider})=>{

    const sliderSize = 300

    const leftSide = (((selectmin - absmin) / (absmax - absmin))* sliderSize)+30

    const rightSide = (((absmax - selectmax) / (absmax - absmin)) * sliderSize) + 30
    
    const styles = {
        left:{
            width: `${+Math.max(leftSide, 300-rightSide)}px`,
        },
        right: {
            width: `${+Math.max(rightSide, 300- leftSide)}px`,
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
            <div className="flex-row-no-wrap space-between slider-line">
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