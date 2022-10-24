import styles from './Header.module.css'

const Header = (props) => {
    return <div className={styles.header}>
        <h2>{props.heading}</h2>
    </div>
}

export default Header