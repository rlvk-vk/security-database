import React, { useState } from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import { activities } from '../data/tempData'
import { ReactComponent as SearchIcon } from '../icons/search.svg'
import { convertDotToDash } from '../utils/common'
import styles from './App.module.scss'
import Categories from './categories/Categories'
import logo from './emerson-logo.png'
import SearchResult from './SearchResult/SearchResult'
import Single from './SearchResult/Single'

const App: React.FC = () => {
	const [searchword, setSearchword] = useState('')
	const history = useHistory()

	const submitSearch = (event: any) => {
		if (event.key === 'Enter' || event.target.nodeName === 'svg') {
			history.push('/search')
			event.target.blur()
		}
	}

	const handleSearch = (event: any) => {
		setSearchword(event.target.value)
	}

	const renderRoutes = () => {
		const routes = [
			{ path: '/', exact: true, render: () => <Categories setSearchword={setSearchword}/> },
			{ path: '/search', exact: true, render: () => <SearchResult searchWords={searchword}/> }
		]

		for (const i in activities) {
			routes.push({
				path: `/activity/${convertDotToDash(activities[i].id)}`,
				exact: true,
				render: () => <Single activity={activities[i]}/>
			})
		}

		return routes.map(route => {
			return <Route key={route.path} path={route.path} exact={route.exact} render={route.render}/>
		})
	}

	return (
		<div className={styles.app}>
			<NavLink to="/" exact={true}><img className={styles.logo} src={logo} alt="emerson-logo"/></NavLink>
			<h1>Personal Protection</h1>

			<div className={styles.search}>
				<input type="text"
					   placeholder="Search activity..."
					   value={searchword}
					   onChange={handleSearch}
					   onKeyPress={submitSearch}
				/>
				<SearchIcon onClick={submitSearch}/>
			</div>

			{renderRoutes()}
		</div>
	)
}

export default App
