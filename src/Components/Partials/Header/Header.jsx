import { Nav } from '../Nav/Nav'
import styles from './Header.module.scss'

const navItems = [
	{ name: 'Send en hilsen', path: '/' },
    { name: 'Button tæller', path: '/counting'},
	{ name: 'Kontaktformular', path: '/form'},
	{ name: 'Timer', path: '/timer'},
	{ name: 'Goals', path:'/goals'}
]

export const Header = (props) => {

	return (
		<div className={styles.wrapper}>
			<header>
				{/* <h1>{(props.pagetitle) ? props.pagetitle : 'Hook'}</h1> */}
				<Nav navItems={navItems} />
			</header>
		</div>
	)
  }