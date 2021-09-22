import React from 'react'
import { Bell, LogOut } from 'react-feather'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar_menu} id="open-navbar1">
            <ul className={styles.navbar_nav}>
              <li className={styles.nav_icon}> <Link to="/">Login</Link></li>
            
                  
              <li className={styles.nav_icon}> <a href="#">
                  <div  ><span>logout</span> <LogOut size={12} /></div>
                  
                  </a></li>
                  <li><a href="#"><Bell /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
