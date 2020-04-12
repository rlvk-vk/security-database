import React from 'react'
import { NavLink } from 'react-router-dom'
import { activities } from '../../data/tempData'
import { convertDotToDash } from '../../utils/common'
import styles from './SearchResult.module.scss'

interface ISearchResultProps {
	searchWords: string
}

const SearchResult: React.FC<ISearchResultProps> = ({ searchWords }) => {
	const findResults = () => {
		return activities.filter((activity: any) => {
			if (searchWords && activity.id.includes(searchWords)) {
				return activity
			}

			return null
		})
	}

	const renderResult = () => {
		const result = findResults()

		if (result) {
			return result.map((activity: any) => {
				return (
					<NavLink key={activity.id} to={`/activity/${convertDotToDash(activity.id)}`}>
						<div className={styles.activity}>
							<h2 className={styles.id}>{activity.id}</h2>
						</div>
					</NavLink>
				)
			})
		}

		return <div>There are currently no activities with the entered ID</div>
	}

	return (
		<div className={styles['result-container']}>{renderResult()}</div>
	)
}

export default SearchResult
