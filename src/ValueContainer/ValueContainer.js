import styles from './ValueContainer.module.css'
const ValueContainer = ({value}) => {
    return(
        <div className={styles.root}>
            {value}
        </div>
    )
}
export default ValueContainer