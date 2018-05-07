const init = () => {
    return {
        digits: [],
        number1: null,
        number2: null,
        operator: null,
        decimal: false
    };
};

const convert = (state) => {
    return parseFloat(state.digits.join(''));
};

const operator = (state, operator) => {
    var value = convert(state);

    if (!isNaN(value)) {
        state.number1 = value;
    }

    state.digits = [];
    state.number2 = null;
    state.operator = operator;
    state.decimal = false;

    return state;
};

const equals = (state) => {
    var value = convert(state);

    if (isNaN(value)) {
        return state;
    }

    var number1 = state.number1;
    var number2 = state.number2 !== null ? state.number2 : value;
    var result = null;

    switch (state.operator) {
        case '/': result = number1 / number2; break;
        case '*': result = number1 * number2; break;
        case '-': result = number1 - number2; break;
        case '+': result = number1 + number2; break;
        default:
            result = null;
            break;
    }

    if (result === null) {
        return state;
    }

    state.digits = result.toString().split('');
    state.number1 = result;
    state.number2 = number2;
    state.decimal = false;

    return state;
}

const reducer = (state = init(), action) => {
    switch (action.type) {        
        case 'CLEAR':
            state = init();
            break;
        case 'DIVISION':
            state = operator(state, '/');
            break;
        case 'MULTIPLICATION':
            state = operator(state, '*');
            break;
        case 'SUBSTRACTION':
            state = operator(state, '-');
            break;
        case 'ADDITION':
            state = operator(state, '+');
            break;
        case 'EQUALS':
            state = equals(state);
            break;
        case 'NUMBER':
            state.digits = state.digits.concat(action.value.toString());
            break;
        case 'DECIMAL':
            if (state.decimal === false) {
                state.decimal = true;
                state.digits = state.digits.concat('.');
            }            
            break;
        default:
            break;
    }

    state = { ...state };

    return state;
};

export default reducer;