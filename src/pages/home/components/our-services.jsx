import React from 'react'
import Zoom from 'react-reveal'
import './css/services.css'
const Services = ()=>{
    return(
       <Zoom duration={2000} clear>
            <div className="our-service text-center">
            <div className="colored-services-text">Services</div>
            <div className="my-service-text">My Services</div>
            <div className="service-details-text">
            I  design multifaceted technical solutions across a wide range software platforms. 
                I have an excellent background as a web developer along with my academic education (Bsc. Computer science and engineering (OAU, Ile-Ife)).
            </div>
            <div className="colored-divider"></div>
        </div>
       </Zoom>
    )
}

export default Services