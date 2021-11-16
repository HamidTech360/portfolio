import React from 'react'
import { Fade } from 'react-reveal'
import {Link} from 'react-router-dom'

import './css/card.css'

const ProjectCard = ({title, link, summary, tech, index, id, target})=>{

    return(
        <div className="Card" style={{backgroundColor:'#1f2235'}}> 
            <Fade duration={1000} left>
            <div className="bold-num" >{index}</div>
            </Fade>
            <div className="card-title" id="proj-card-title"> {title} </div>
            <div className="project-link">
                 <a href={target} style={{textDecoration:'none', color:'#C84C5B'}}>{link}</a> 
            </div>
            <div className="card-details" id="proj-card-details">
                {summary}
            </div>
            
            <div className="proj-tools">
                <i className="fa fa-code proj-icon"></i>
               {tech}
            </div>
            <a href={target}>
                <button className="btn-visit">Visit site <i className="fa fa-external-link"></i></button>
            </a>
            <Link to={`/project/${id}`} style={{textDecoration:'none'}}><div className="learn-more">Learn more <i className="fa fa-arrow-right fa-1x arrow-icon"></i></div></Link>
        </div>
    )
}
export default ProjectCard;