import React from "react";
import SimpleSlider from "../Component/Carosel/Carousel";
import '../Page/css/Projects.scss'

function Projects() {

    const inner =[
        {
            id:1,
            subject:"첫번째 제목",
            tool:"React, Node.js, MongoDB",
            content:"첫번째 프로젝트 설명"
        },
        {
            id:2,
            subject:"두번째 제목",
            tool:"React, Node.js, MongoDB",
            content:"2 프로젝트 설명"
        },
        {
            id:3,
            subject:"세번째 제목",
            tool:"React, Node.js, MongoDB",
            content:"3 프로젝트 설명"
        },
        {
            id:4,
            subject:"네번째 제목",
            tool:"React, Node.js, MongoDB",
            content:"4 프로젝트 설명"
        }
    ]

       
    return(

        
        <div id="projects" className="ProjectsTop">
              <div className="Porject-tag">
                프로젝트
            </div>
            <SimpleSlider inner={inner}/>      
            
        </div>
    )
}


export default Projects;