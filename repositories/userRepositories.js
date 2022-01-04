const client = require( '../database/connectDB' );
const { customErr } = require('../Error/customErr');

const getUserDB = async ( id ) => {
    try {
        return await client.query( `SELECT *
                                    FROM users
                                    WHERE id = ${ id }` );
    } catch ( err ) {
        return new customErr( 'This user cant be find!', err );
    }
};

module.exports = {
    getUserDB
}
