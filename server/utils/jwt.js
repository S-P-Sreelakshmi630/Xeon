const jwt = require('jsonwebtoken');

const secretKey = "xeonwebsite";

const createToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, secretKey, {
      expiresIn: '1h',
    });
  };


  const verifyToken = (token) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (err) {
      return null;
    }
  };

  const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);
  
    const decoded = verifyToken(token);
    if (!decoded) return res.sendStatus(403);
  
    next();
  };
module.exports = { createToken, verifyToken,authenticateToken };
