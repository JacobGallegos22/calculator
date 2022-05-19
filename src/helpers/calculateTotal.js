// This uses postfix calculations to solve the equation
export function calculateTotal(infixArray) {
    const postFixArray = inFixToPostFix(infixArray)
    const stack = []

    for (const character of postFixArray) {
        switch (character) {
            case '+':
                stack.push(Number(stack.pop()) + Number(stack.pop()))
                break
            case '-':
                const firstMinusOperand = stack.pop()
                const secondMinusOperand = stack.pop()
                stack.push(Number(secondMinusOperand) - Number(firstMinusOperand))
                break
            case '/':
                const firstDivisionOperand = stack.pop()
                const secondDivsionOperand = stack.pop()
                stack.push(Number(secondDivsionOperand) / Number(firstDivisionOperand))
                break
            case '*':
                stack.push(Number(stack.pop()) * Number(stack.pop()))
                break
            case '%':
                const firstModuleOperand = stack.pop()
                const secondModuleOperand = stack.pop()
                stack.push(Number(secondModuleOperand % Number(firstModuleOperand)))
                break
            default:
                stack.push(character)
                break;
        }
    }

    return stack.pop()
}

// this takes an infix equation and returns it in postFix
function inFixToPostFix(calculatorInput) {
    const stack = []
    const postFixArray = []

    const operatorPrecidence = {
        '+': 1,
        '-': 1,
        '/': 2,
        '*': 2,
        '%': 2
    }

    for(const item of calculatorInput) {
        if (stack.length > 0 && operatorPrecidence.hasOwnProperty(item)) {
            var topOperator = stack.at(stack.length - 1)
            var topOperatorPrecidence = operatorPrecidence[topOperator]
            var currentOperatorPrecidence = operatorPrecidence[item]

            if (currentOperatorPrecidence && (currentOperatorPrecidence < topOperatorPrecidence)) {
                stack.push(item)
            } else {
                postFixArray.push(stack.pop())
                stack.push(item)
            }

        } else {
            stack.push(item)
        }
    }

    while ( stack.length > 0) {
        postFixArray.push(stack.pop())
    }

    return postFixArray;
}