import React from 'react'
import styles from './App.module.scss'
import Categories from './categories/Categories'
import logo from './emerson-logo.png'
import { ReactComponent as SearchIcon } from '../icons/search.svg'

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<img className={styles.logo} src={logo} alt="emerson-logo"/>
			<h1>Security Database</h1>

			<div className={styles.search}>
				<input type="text" placeholder="Search activity..."/>
				<SearchIcon />
			</div>

			<Categories/>
		</div>
	)
}

export default App
