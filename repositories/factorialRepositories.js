const { customErr } = require( "../Error/customErr" );
const getFactorialByRecursion = ( { number, start } ) => {
    try {
        function getFactorial( number ) {
            return (number !== 1) ? number * getFactorial( number - 1 ) : 1;
        }

        let result = getFactorial( number );
        const end = new Date();
        const time = end - start;
        return { result, time };
    } catch ( err ) {
        return throw new customErr( 'Your type or number are invalid!', err );
    }
};

const getFactorialByCycle = ( { number, start } ) => {
    try {
        let result = number;
        while ( number !== 1 ) {
            result *= (number - 1);
            number--;
        }
        const end = new Date();
        const time = end - start;
        return { result, time };
    } catch ( err ) {
        return throw new customErr( 'Your type or number are invalid!', err );
    }
};
module.exports = {
    getFactorialByRecursion,
    getFactorialByCycle
}
