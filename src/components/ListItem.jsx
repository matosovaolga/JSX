import React from 'react';
import Card from './Card';
import styles from './ListItem.module.css';

const ListItem = (props) => {
	const images = props.images.map((item) => {
		return <Card key={item.id} image={item}></Card>;
	})
	return (
		<>
			<p>Found {props.images.length} images: </p>
			<div className={styles.listItem}>
				{images}
			</div>
		</>

	);
};

export default ListItem;