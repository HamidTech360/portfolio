import React, {useEffect, useState} from 'react'
import ProjectCard from './project-card';
import Zoom from 'react-reveal'
import Projects from '../../../projects.json'
import './css/proj-cards.css'
import './css/cards.css'
const ProjectCards = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(Projects)
    },[])
    
    return ( 
        
        <div className="cards" id="proj-cards">
            <div className="row card-grid">
                {data.map((item, index)=>
                     <Zoom duration={2000} clear key={index}>
                     <div className="col-lg-4 col-md-4 col-sm-12-col-xs-12 card-col" id="proj-card-col">
                             <ProjectCard 
                                id={item.id}
                                 title={item.title}
                                 link={item.link}
                                 summary={item.summary}
                                 tech={item.tech}
                                 index={item.index}                                
                                 target={item.target}
                                 apiDoc={item.apiDocUrl?item.apiDocUrl:null}
                             />
                         </div>
                    </Zoom>
                )}
            </div>
        </div>
     );
}
 
export default ProjectCards;