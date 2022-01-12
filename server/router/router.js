const URL = require( 'url' );
const { getHistory } = require( '../contoller/controller' );

const routs = async ( req, res, body ) => {
    let result, error;
    const { method, url } = req;
    const { pathname } = URL.parse(url, true);
    switch (true) {
        case method === 'GET' && pathname === '/companies':
            ({ result, error } = await getHistory());
            break;
        default:
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if ( error ) {
        res.statusCode = error.status;
        return res.end( JSON.stringify( { error } ) );
    }
    res.statusCode = result.status;
    return result.data;
}

module.exports = { routs };
