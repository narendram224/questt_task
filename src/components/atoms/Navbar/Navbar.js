import React from 'react'
import { Bell, LogOut, User } from 'react-feather'
import { Link, withRouter } from 'react-router-dom'
import useRedux from '../../../Helper/useRedux'
import { logoutViaApi } from '../../../redux/login/loginAction'
import { getUserName } from '../../../utils'
import styles from './style.module.css'
const Navbar = ({history}) => {
    const [{ user, islogin,loader,error }, dispatch] = useRedux('login');
    console.log("user",user);
    const handleLogout =()=>{
        // console.log("Click");
       dispatch(logoutViaApi())
    }
    return (
        <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar_menu} id="open-navbar1">
            <ul className={styles.navbar_nav}>
              {/* <li className={styles.nav_icon}> <Link to="/">Login</Link></li> */}
            
              <li className={styles.nav_icon}><a href="#"><div><span>{getUserName()}</span><User /></div></a></li>  
              <li className={styles.nav_icon}> <a href="#">
                  <div onClick={handleLogout}  ><span>logout</span> <LogOut size={12} /></div>
                  
                  </a></li>
                  <li><a href="#"><Bell /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default withRouter(Navbar)
