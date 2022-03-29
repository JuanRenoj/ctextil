const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.header("Authorization");
  //console.log("headrer " + bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
  //  console.log("solo coid " + bearerToken);
    jwt.verify(bearerToken, "secretKey", (error, authData) => {
      if (error) {
        res.status(403).json({ error: "No tiene la autorización para realizar esta acción " });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ error: "Necesita usar un token de autorización" });
  }
};

module.exports = verifyToken;
