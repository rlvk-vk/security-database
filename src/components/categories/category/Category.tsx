import React from 'react'
import styles from './Category.module.scss'

interface ICategory {
	id: string
	name: string
	icon: React.ReactNode
}

interface ICategoryProps {
	category: ICategory
}

const Category: React.FC<ICategoryProps> = ({category}) => {
	return (
		<div className={styles.category}>
			<div className={styles.icon}>{category.icon}</div>
			<div className={styles.id}>{category.id}</div>
			<div className={styles.name}>{category.name}</div>
		</div>
	)
}

export default Category
