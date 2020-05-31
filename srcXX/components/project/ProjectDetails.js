import React from 'react'

export default function ProjectDetails(props) {
    // console.log(props);
    let id = props.match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                   <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptates expedita ullam inventore, tenetur ipsam hic numquam enim veniam, eligendi illum natus, minima labore veritatis quasi totam esse sit vitae.</p>
                </div>
                <div className="card-action grey text lighten-4">
                    <div>Posted by MY</div>
                    <div>Feb 2020, 11PM</div>
                </div>
            </div>
        </div>
    )
}
