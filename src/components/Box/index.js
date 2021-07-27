import React from 'react'
import FrameLogo from '../../assets/home/Framelogo.png'

const Box = () => {
    return (
        <>
            <div className="small-box text-center ">
                <img src={FrameLogo} alt="frame logo" />
                <h5>24 hour doctor</h5>
                <p>we provide the best<br /> medical service</p>
            </div>
        </>
    )
}

export default Box
