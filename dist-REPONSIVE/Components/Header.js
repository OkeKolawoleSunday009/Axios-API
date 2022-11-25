import { MenuOpen, MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import '../ComponentStyles/Header.scss';

export default function Header() {

    const [ menuOpen, setMenuOpen] = useState(false);
    const MenuToggler = () =>setMenuOpen((p) => !p);
    
  return (
    <div className="header">
        <div className='header__content'>

           <div className='logo'>
                <span>Code Focus</span>
            </div>

            <div>
                <nav className={menuOpen ? 'nav--open nav' : "nav"}>
                    <a className ='nav__item'  href={"/"}>Page One</a>
                    <a className ='nav__item'  href={"/"}>Page One</a>
                    <a className ='nav__item'  href={"/"}>Page One</a>
                    <a className ='nav__item'  href={"/"}>Page One</a>
                    <div className='nav__button__container'>
                        <Button/>
                    </div>
                </nav>
            </div>
            <div>
                <div className='header__button__container'>
                    <Button/>
                </div>

                <button className='header__toggler' onClick={MenuToggler}>
                    {/* <MoreVert/> */}ff
                </button>
            </div>
        </div>

    </div>
  )
}

const Button = () =>{

    return <button className='button'>click me</button>

}