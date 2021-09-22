import React from 'react'
import styles from './style.module.css'
const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
	<div className={styles.screen}>
        {children}
    <div className={styles.screen__background}>
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>		
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>
		</div>		
	</div>
</div>

    )
}

export default MainLayout
