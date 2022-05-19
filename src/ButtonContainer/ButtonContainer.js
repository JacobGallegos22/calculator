import Button from './Button/Button'
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({setValue}) => {
    const buttons = [
        {text: 'AC', color: '#62EAE5'},
        {text: '+/-', color: '#62EAE5'},
        {text: '%', color: '#62EAE5'},
        {text: '/', color: '#FFA500'},
        {text: '7', color: 'black'},
        {text: '8', color: 'black'},
        {text: '9', color: 'black'},
        {text: '*', color: 'orange'},
        {text: '4', color: 'black'},
        {text: '5', color: 'black'},
        {text: '6', color: 'black'},
        {text: '-', color: 'orange'},
        {text: '1', color: 'black'},
        {text: '2', color: 'black'},
        {text: '3', color: 'black'},
        {text: '+', color: '#FFA500'},
        {text: 'undo', color: 'black'},
        {text: '0', color: 'black'},
        {text: '.', color: 'black'},
        {text: '=', color: '#FFA500'}
    ]
    return (
        <div className={styles.root}>
            { buttons.map((value, i) => (
                <Button
                    key={i}
                    text={value.text} 
                    color={value.color}
                    onClickValue={() => setValue(value.text) } />
            ))}
        </div>
    )
}
export default ButtonContainer