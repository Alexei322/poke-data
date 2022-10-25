import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
    return <div className={styles.header}>
        <Link to={'/'}>{props.heading}</Link>
    </div>
}

export default Header