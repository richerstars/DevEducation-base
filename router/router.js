const url = require( 'url' );
require( '../database/connectDB' );
const { userController } = require( '../controllers/userController' );
const { factorialController } = require( '../controllers/factorialController' );

const router = async ( req, res ) => {
    try {
        const { pathname, query } = url.parse( req.url, true );

        switch ( true ) {
            case (req.method === 'GET' && pathname === '/users'):
                const data = await userController.getUser( query.id );
                res.statusCode = 200;
                return res.end( JSON.stringify( { message: data } ) );
            case (req.method === 'GET' && pathname === '/factorial'):
                const start = new Date();
                const result = factorialController.getFactorial( query, start );
                res.statusCode = 200;
                return res.end( JSON.stringify( { message: result } ) );
        }
    } catch ( err ) {
        console.error( 'Some error for routes: ', err );
    }
};
module.exports = { router };
