import React, {useEffect, useState} from "react";
import Link from 'react-router-dom'
import Header from "../home/components/header";
import Footer from '../home/components/footer'
import Data from '../../projects.json'
import './components/css/project.css'

const Project = (props) => {
    const [projects, setProjects] = useState([])
    const [tech, setTech] = useState([])
    
    useEffect(()=>{
        window.scrollTo(0, 0)
        const projectId = props.match.params.id
        const data = Data[projectId-1]
        setProjects(data)
        setTech(data.techArr)

        // console.log(tech);
    },[])
  
    return ( 
        <div className="project-details">
            <Header/>
            <div className="project-body">
                <div className="project-title">{projects.title}</div>
                
                <div className="project-link">{projects.link}</div>
               
                <a href={projects.target}>
                    <button className="btn proj-btn-visit">Visit site <i className="fa fa-external-link"></i></button>
                </a>
                <div className="project-img-box text-center">
                    <img src={`../../assets/${projects.image}`} alt="project image" className="proj-img" />
                </div>

                <div className="project-description">

                    <div className="description-heading">DESCRIPTION</div>
                    <div className="description-body">
                        {projects.details}
                    </div>

                    <div className="project-role">
                        <div className="role-heading">MY ROLE</div>
                        <div className="role-body">
                          {projects.role}
                        </div>
                    </div>

                    <div className="project-techs">
                        <div className="techs-heading">TECHNOLOGIES/DEPENDENCIES</div>
                        <div className="techs-body row">
                            {projects.tech}
                        </div>
                    </div>

                   
                    <div className="project-pages">
                        <div className="techs-heading">PAGES</div>
                        <div>
                            {projects.pages}
                        </div>
                    </div>

                   
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Project;