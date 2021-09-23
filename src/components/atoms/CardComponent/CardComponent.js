import React from 'react'
import styles from './style.module.css'
const CardComponent = ({title,subject,type,quest_count}) => {

    return (
        <div className={styles.product_card}>
		<div className={styles.badge}>{quest_count}</div>
		<div className={styles.product_tumb}>
			<img src="https://i.imgur.com/xdbHo4E.png" alt="" />
		</div>
		<div className={styles.product_details}>
			<span className={styles.product_catagory}>{subject}</span>
			<h4><a href="">{title}</a></h4>
			<p>{type}</p>
		</div>
	</div>
    )
}

export default CardComponent
