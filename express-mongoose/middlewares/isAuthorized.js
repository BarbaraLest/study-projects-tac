const jwt = require('jsonwebtoken');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const isAuthorized = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization)
         return res.status(403).json({ message: 'Token não informado'})
    

    jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
        console.log(decoded);
        if(err)
            return res.status(403).json({message: 'Token invalido'});

        req.userUd = decoded.id;
        return next();
    })

    
    
};

module.exports = isAuthorized;