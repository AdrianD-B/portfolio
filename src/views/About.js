import React, { useState } from 'react';

// links
import { ReactComponent as LinkedInIcon } from '../images/linkedin-in-brands.svg';
import { ReactComponent as DownloadIcon } from '../images/download-solid.svg';

const About = () => {
    const [french, setFrench] = useState(false);

    return (
        <>
            <div className="About">
                <div className="About__container">
                    <div className="About__container__lang">
                        <span className={french ? "About__container__lang__buttonActive" : "About__container__lang__button"} onClick={() => setFrench(false)}>English</span>
                        <span className={!french ? "About__container__lang__buttonActive" : "About__container__lang__button"} onClick={() => setFrench(true)}>Français</span>
                    </div>
                    {!french ?
                        <>
                            <h1 className="About__container__title">Hi, I'm Adrian</h1>
                            <p className="About__container__text">I'm a Front-End Developer that's comfortable with React/Javascript. A website must be nice to look at with some animation to make it pop. It must load quickly and have a responsive design for mobile. The user should have an easy time finding what they are looking for.
                            Since I graduated from computer engineering technology, I had been working on understanding on how to improve the efficiency of websites, so people have a better experience.
                            </p>
                        </>
                        :
                        <>
                            <h1 className="About__container__title">Bonjour, je m'appelle Adrian</h1>
                            <p className="About__container__text">Je suis un développeur frontal qui est confortable avec React et JavaScript. Pour moi, un site web doit avoir une apparence plaisante avec des animations pour enrichir l’expérience. Le site devrait avoir un temps de chargement rapide et être fonctionnel pour l’utilisation sur des appareils mobile.
                            J’ai reçu un diplôme avance en technologie du génie informatique et, depuis ce temps,  je travaille à  améliorer l’efficacité des sites web pour que les utilisateurs puissent avoir une meilleure expérience.
                            </p>
                        </>}
                    <span className="divider" />
                    <ul className="About__container__skills">
                        <li className="About__container__skills__item">HTML5/CSS/SASS</li>
                        <li className="About__container__skills__item">JavaScript/ES6</li>
                        <li className="About__container__skills__item">React</li>
                        <li className="About__container__skills__item">Git</li>
                        <li className="About__container__skills__item">Figma</li>
                        <li className="About__container__skills__item">MYSQL</li>
                        <li className="About__container__skills__item">Wordpress(CMS)</li>
                    </ul>
                    <div className="About__container__list">
                        <a className="About__container__list__icon"
                            href="https://www.linkedin.com/in/adrian-de-braga-3345411a0/"
                            target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a className="About__container__list__icon"
                            href="/"
                            target="_blank" rel="noopener noreferrer">
                            <DownloadIcon />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;