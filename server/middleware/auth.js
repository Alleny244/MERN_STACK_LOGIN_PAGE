const jwt =require('jsonwebtoken');
require('dotenv').config();



const auth= (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(401).send( 'No token, authorization denied' );

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).send( 'Token is not valid' );
  }
};

module.exports=auth;