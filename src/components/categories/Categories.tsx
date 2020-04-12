import React from 'react'
import Category from './category/Category'
import styles from './Categories.module.scss'
import { ReactComponent as AssemblyIcon } from '../../icons/wrench.svg'
import { ReactComponent as FirstAidIcon } from '../../icons/first-aid.svg'
import { ReactComponent as OilIcon } from '../../icons/oil-can.svg'
import { ReactComponent as ForkliftIcon } from '../../icons/forklift.svg'
import { ReactComponent as CutIcon } from '../../icons/cut.svg'
import { ReactComponent as VailIcon } from '../../icons/vial.svg'
import { ReactComponent as PaintIcon } from '../../icons/paint-brush.svg'
import { ReactComponent as MaterialIcon } from '../../icons/box-full.svg'
import { ReactComponent as MachineIcon } from '../../icons/industry-alt.svg'
import { ReactComponent as GlovesIcon } from '../../icons/hand-paper.svg'
import { ReactComponent as RadiationIcon } from '../../icons/radiation-alt.svg'
import { ReactComponent as FreezeIcon } from '../../icons/snowflakes.svg'

const categories = [
	{
		id: '5.3.1',
		name: 'Material Handling',
		icon: <MaterialIcon />
	},
	{
		id: '5.3.2',
		name: 'Machining Activities',
		icon: <MachineIcon />
	},
	{
		id: '5.3.3',
		name: 'Assembly',
		icon: <AssemblyIcon />
	},
	{
		id: '5.3.4',
		name: 'Testing',
		icon: <VailIcon />
	},
	{
		id: '5.3.5',
		name: 'Painting Operations',
		icon: <PaintIcon />
	},
	{
		id: '5.3.6',
		name: 'Welding / Cutting Work',
		icon: <CutIcon />
	},
	{
		id: '5.3.7',
		name: 'Oil or Coolant',
		icon: <OilIcon />
	},
	{
		id: '5.3.8',
		name: 'Forklift Operations',
		icon: <ForkliftIcon />
	},
	{
		id: '5.3.9',
		name: 'Providing First Aid',
		icon: <FirstAidIcon />
	},
	{
		id: '5.3.10',
		name: 'Industrial Hygine and Gloves',
		icon: <GlovesIcon />
	},
	{
		id: '5.3.11',
		name: 'Freeze Burn Protection',
		icon: <FreezeIcon />
	},
	{
		id: '5.3.12',
		name: 'Handling Hazardous Materials',
		icon: <RadiationIcon />
	}
]

const Categories: React.FC = () => {
	const renderCategories = () => {
		return categories.map(category => {
			return <Category key={category.id} category={category} />
		})
	}

	return (
		<div className={styles.categories}>{renderCategories()}</div>
	)
}

export default Categories
