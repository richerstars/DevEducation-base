const { userRepositories } = require( '../repositories/userRepositories' );
const { customErr } = require( "../Error/customErr" );

const getUser = async ( id ) => {
    try {
        return await userRepositories.getUserDB( id );
    } catch ( err ) {
        return new customErr( 'This user cant be find!', err );
    }
};

module.exports = { getUser }
