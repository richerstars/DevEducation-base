const { customErr } = require( "../Error/customErr" );
const {getRecursion, getCycle} = require('../repositories/factorialRepositories');

const getFactorial = ({ number, type }, start) => {
    try {
        if (type === 'recursion') {
           return  getRecursion.getFactorialByRecursion({ number, start });
        }
        if (type === 'cycle') {
            return  getCycle.getFactorialByCycle({ number, start });
        }
        throw new customErr('Your type or number are invalid!');
    } catch (err) {
        return err;
    }
};

module.exports = {
    getFactorial
}
