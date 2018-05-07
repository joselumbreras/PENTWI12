import rootReducer from '../../src/reducers/root';

var state;

beforeEach(function() {
    state = {
        digits: [],
        number1: null,
        number2: null,
        operator: null,
        decimal: false
    };
});

describe('addition', function() {
    it('should add two numbers', function() {
        state = rootReducer(state, {
            type: 'NUMBER',
            value: 2
        });

        expect(state.digits).toEqual(['2']);

        state = rootReducer(state, {
            type: 'ADDITION'
        });

        expect(state.digits).toEqual([]);
        expect(state.number1).toBe(2);
        expect(state.number2).toBeNull();
        expect(state.operator).toBe('+');
        expect(state.decimal).toBe(false);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 5
        });

        expect(state.digits).toEqual(['5']);

        state = rootReducer(state, {
            type: 'EQUALS'
        });

        expect(state.digits).toEqual(['7']);
        expect(state.number1).toBe(7);
        expect(state.number2).toBe(5);
        expect(state.decimal).toBe(false);
    })
});

describe('substraction', function() {
    it('should substract two numbers', function() {
        state = rootReducer(state, {
            type: 'NUMBER',
            value: 2
        });

        expect(state.digits).toEqual(['2']);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 5
        });

        expect(state.digits).toEqual(['2', '5']);

        state = rootReducer(state, {
            type: 'DECIMAL'
        });

        expect(state.digits).toEqual(['2', '5', '.']);
        expect(state.decimal).toBe(true);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 5
        });

        expect(state.digits).toEqual(['2', '5', '.', '5']);

        state = rootReducer(state, {
            type: 'SUBSTRACTION'
        });

        expect(state.digits).toEqual([]);
        expect(state.number1).toBe(25.5);
        expect(state.number2).toBeNull();
        expect(state.operator).toBe('-');
        expect(state.decimal).toBe(false);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 1
        });

        expect(state.digits).toEqual(['1']);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 5
        });

        expect(state.digits).toEqual(['1', '5']);

        state = rootReducer(state, {
            type: 'DECIMAL'
        });

        expect(state.digits).toEqual(['1', '5', '.']);
        expect(state.decimal).toBe(true);

        state = rootReducer(state, {
            type: 'NUMBER',
            value: 5
        });

        expect(state.digits).toEqual(['1', '5', '.', '5']);

        state = rootReducer(state, {
            type: 'EQUALS'
        });

        expect(state.digits).toEqual(['1', '0']);
        expect(state.number1).toBe(10);
        expect(state.number2).toBe(15.5);
        expect(state.decimal).toBe(false);
    });

    describe('multiplication', function() {
        it('should multiply two numbers', function() {
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 9
            });
    
            expect(state.digits).toEqual(['9']);
    
            state = rootReducer(state, {
                type: 'MULTIPLICATION'
            });
    
            expect(state.digits).toEqual([]);
            expect(state.number1).toBe(9);
            expect(state.number2).toBeNull();
            expect(state.operator).toBe('*');
            expect(state.decimal).toBe(false);
    
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 5
            });
    
            expect(state.digits).toEqual(['5']);
    
            state = rootReducer(state, {
                type: 'EQUALS'
            });
    
            expect(state.digits).toEqual(['4', '5']);
            expect(state.number1).toBe(45);
            expect(state.number2).toBe(5);
            expect(state.decimal).toBe(false);
        });
    });

    describe('division', function() {
        it('should divide two numbers', function() {
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 6
            });
    
            expect(state.digits).toEqual(['6']);
    
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 0
            });
    
            expect(state.digits).toEqual(['6', '0']);
    
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 0
            });
    
            expect(state.digits).toEqual(['6', '0', '0']);
    
            state = rootReducer(state, {
                type: 'DIVISION'
            });
    
            expect(state.digits).toEqual([]);
            expect(state.number1).toBe(600);
            expect(state.number2).toBeNull();
            expect(state.operator).toBe('/');
            expect(state.decimal).toBe(false);
    
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 1
            });
    
            expect(state.digits).toEqual(['1']);
    
            state = rootReducer(state, {
                type: 'NUMBER',
                value: 0
            });
    
            expect(state.digits).toEqual(['1', '0']);
    
            state = rootReducer(state, {
                type: 'EQUALS'
            });
    
            expect(state.digits).toEqual(['6', '0']);
            expect(state.number1).toBe(60);
            expect(state.number2).toBe(10);
            expect(state.decimal).toBe(false);
        });
    });
});