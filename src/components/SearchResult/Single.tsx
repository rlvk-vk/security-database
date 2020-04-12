import React from 'react'
import styles from './SearchResult.module.scss'

interface IEquipment {
	name: string
	image: string
}

interface IActivity {
	id: string
	risk: string
	safetyDataSheet: string
	equipment: IEquipment[]
}

interface ISingleProps {
	activity: IActivity
}

const Single: React.FC<ISingleProps> = ({activity}) => {
	function renderEquipment(equipment: IEquipment[]) {
		return equipment.map(equipmentProperties => {
			return (
				<div key={equipmentProperties.name} className={styles.equipment}>
					<img src={equipmentProperties.image} alt={equipmentProperties.name}/>
					<p>{equipmentProperties.name}</p>
				</div>
			)
		})
	}

	return (
		<div className={`${styles.activity} ${styles.single}`}>
			<h2 className={styles.id}>{activity.id}</h2>

			<div className={styles.details}>
				<div><h4>Risk Assesment</h4>{activity.risk}</div>
				<div className={styles['safety-data-sheet']}><h4>Safety Data
					Sheet</h4>{activity.safetyDataSheet}
				</div>
				<div><h4>Equipment</h4>{renderEquipment(activity.equipment)}</div>
			</div>
		</div>
	)
}

export default Single
