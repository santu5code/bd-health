import React from 'react'
import Emergency from '../../assets/secondpage/emergency.png';
import {AiOutlineArrowRight} from 'react-icons/ai'

const ServiceBox = () => {
    return (
        <>
         <div className="service-box mt-5 p-3"><h1><img src={Emergency} alt="emergency" /> Emergency</h1>  
        <div className='d-flex mt-3 text'><p className="me-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium 
            odio soluta odit
             placeat nobis .</p><AiOutlineArrowRight className='right-arrow'/></div>
             </div> 
        </>
    )
}

export default ServiceBox
