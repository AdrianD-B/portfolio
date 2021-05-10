import React,{ useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// navbar items
import MenuItems from '../items/MenuItems';

const Navbar = () => {
    const [clicked,setClicked] = useState(true);
    const handleResize = () => {
        if( window.innerWidth > 720){
            setClicked(true);
        }
    }

    useEffect(() => {
        window.addEventListener("resize",handleResize)
    })

    return(
        <>
            <nav className="Navbar">
                <div className="Navbar__menu" onClick={() => setClicked(!clicked)}>
                    <FontAwesomeIcon icon={clicked ? faBars : faTimes} size="3x"/>
                </div>
                <ul className={clicked ? 'Navbar__list' : 'Navbar__listMobile'}>
                    {MenuItems.map((item)=>{
                        return(
                            <li key={item.id}><a className={clicked ? item.cName : 'Navbar__listMobile__item'} href={item.url}>{item.label}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;