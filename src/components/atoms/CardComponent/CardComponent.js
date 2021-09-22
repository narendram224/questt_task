import React from 'react'
import styles from './style.module.css'
const CardComponent = () => {
    return (
        <div className={styles.product_card}>
		<div className={styles.badge}>Hot</div>
		<div className={styles.product_tumb}>
			<img src="https://i.imgur.com/xdbHo4E.png" alt="" />
		</div>
		<div className={styles.product_details}>
			<span className={styles.product_catagory}>Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum !</p>
			{/* <div className={styles.product-bottom-details}>
				<div className={styles.product-price}><small>$96.00</small>$230.99</div>
				<div className={styles.product-links}>
					<a href=""><i className="fa fa-heart"></i></a>
					<a href=""><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div> */}
		</div>
	</div>
    )
}

export default CardComponent
