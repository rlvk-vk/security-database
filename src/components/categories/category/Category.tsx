import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Category.module.scss'

interface ICategory {
	id: string
	name: string
	icon: React.ReactNode
}

interface ICategoryProps {
	category: ICategory

	setSearchword(word: string): any
}

const Category: React.FC<ICategoryProps> = ({ category, setSearchword }) => {
	const history = useHistory()

	const handleClick = (id: string) => {
		setSearchword(id)
		history.push('/search')
	}

	return (
		<div className={styles.category} onClick={() => handleClick(category.id)}>
			<div className={styles.icon}>{category.icon}</div>
			<div className={styles.id}>{category.id}</div>
			<div className={styles.name}>{category.name}</div>
		</div>
	)
}

export default Category
