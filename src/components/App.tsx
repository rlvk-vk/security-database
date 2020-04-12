import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../icons/search.svg'
import styles from './App.module.scss'
import Categories from './categories/Categories'
import logo from './emerson-logo.png'

const App: React.FC = () => {
	const [searchword, setSearchword] = useState('')

	const submitSearch = (event: any) => {
		if (event.key === 'Enter' || event.target.nodeName === 'svg') {
			console.log(searchword)
		}
	}

	const handleSearch = (event: any) => {
		setSearchword(event.target.value)
	}

	return (
		<div className={styles.app}>
			<img className={styles.logo} src={logo} alt="emerson-logo"/>
			<h1>Security Database</h1>

			<div className={styles.search}>
				<input type="text"
					   placeholder="Search activity..."
					   value={searchword}
					   onChange={handleSearch}
					   onKeyPress={submitSearch}
				/>
				<SearchIcon onClick={submitSearch}/>
			</div>

			<Categories/>
		</div>
	)
}

export default App
