import { useState } from 'react'
import { calculateTotal } from '../helpers/calculateTotal'

// This hook takes in the inputed value and sets up our equation and display for future calculations
const useAddCharacter = () => {
    const [calculatorValue, setCalculatorValue] = useState([])
    const [currentOperand, setCurrentOperand] = useState('')

    const onAddCharacter = (value) => {
        const operators = ['-', '+', '/', '*', '%']
        if (operators.includes(value)) {
            setCalculatorValue(s => [...s, currentOperand])
            setCalculatorValue(s => [...s, value])
            setCurrentOperand('')
          } else if(value === '=') {
            const total = calculateTotal([...calculatorValue, currentOperand])
            setCurrentOperand(Math.round((total + Number.EPSILON) * 100) / 100)
            setCalculatorValue([])
          } else if(value === 'AC') {
            setCalculatorValue([])
            setCurrentOperand('')
          } else if (value === 'undo') {
            setCurrentOperand('')
          } else if (value === '+/-') {
              setCurrentOperand(s => {
                  if (s.includes('-')) {
                    return s.substring(1)
                  } else {
                    return s = '-' + s
                  }
                  
              })
          }else {
            setCurrentOperand(s => s += value)
          }
    }

    return [currentOperand, (value) => onAddCharacter(value)]
}

export default (useAddCharacter)