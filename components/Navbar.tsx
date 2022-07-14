import React from 'react'
import styles from './Navbar.module.css'
import { NavbarLink } from './NavbarLink'

const menuItems = [
  {text: 'Home', href: '/'},
  {text: 'About', href: '/about'},
  {text: 'Contact', href: '/contact'},
]

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
        {menuItems.map(({text, href}) => {
            return <NavbarLink  
              key={href}
              href={href}
              text={text}/>
        })}
    </nav>
  );
}
