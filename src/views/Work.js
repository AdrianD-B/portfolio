import React from 'react';

// icons
import { ReactComponent as GitIcon } from '../images/github-brands.svg';

// projects
import projectList from '../projects.json';

const Work = () => {
    return(
        <>
            <div className="Work">
                <div className="Work__container">
                    <h1 className="Work__container__title">Portfolio</h1>
                    <div className="Work__container__projects">
                        {projectList.projects.map((item) => {
                            return (
                                <>
                                    <div className="Work__container__projects__container" key={item.id}>
                                        <img className="Work__container__projects__container__image" src={item.image} alt=""/>
                                        <a className="Work__container__projects__container__icon" href={item.url}><GitIcon/></a>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;