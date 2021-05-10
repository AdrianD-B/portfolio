import React, { useState, useEffect } from 'react';

// links
import { ReactComponent as GitIcon } from '../images/github-brands.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin-in-brands.svg';

// images
import cssImg from '../images/css.png';
import htmlImg from '../images/html1.png';
import figmaImg from '../images/figma.png';
import jsImg from '../images/js1.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/nodeexpress.png';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const handleMouseMove = (e) => {
        setOffsetX(e.screenX);
        setOffsetY(e.screenY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, []);

    return (
        <>
            <div className="HomePage" onMouseMove={() => handleMouseMove}>
                <h1 className="HomePage__Title" style={{ transform: `translateY(${offsetY * 0.05}px) translateX(${offsetX * 0.05}px)` }}><b>Adrian De Braga</b></h1>
                <h1 className="HomePage__text" style={{ transform: `translateY(${offsetY * 0.05}px) translateX(${offsetX * 0.05}px)` }}>Front-End Developer</h1>
                <div className="HomePage__Links" style={{ transform: `translateY(${offsetY * 0.05}px) translateX(${offsetX * 0.05}px)` }}>
                    <a className="HomePage__Links__icon"
                        href="https://github.com/AdrianD-B"
                        target="_blank" rel="noopener noreferrer">
                        <GitIcon />
                    </a>
                    <a className="HomePage__Links__icon"
                        href="https://www.linkedin.com/in/adrian-de-braga-3345411a0/"
                        target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
                <div className="HomePage__container">
                    <img className='HomePage__container__Img' src={cssImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                    <img className='HomePage__container__Img' src={nodeImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                    <img className='HomePage__container__Img' src={htmlImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                    <img className='HomePage__container__Img' src={figmaImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                    <img className='HomePage__container__Img' src={jsImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                    <img className='HomePage__container__Img' src={reactImg} alt='' style={{ transform: `translateY(${offsetY * 0.1}px) translateX(${offsetX * 0.05}px)` }} />
                </div>
            </div>
        </>
    )
}

export default Home;