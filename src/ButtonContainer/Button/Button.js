import styles from './Button.module.css'
const Button = ({text, color, onClickValue}) => {
    return (
        <div className={styles.root} style={{color: color}} onClick={() => onClickValue()}>
            {text}
        </div>
    )
}
export default Button