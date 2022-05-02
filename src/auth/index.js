// npm i jsonwebtoken
import jwt from "jsonwebtoken";
import { secret } from "../../config";

// sign genera el token para el usuario
export const signToken = (payload) => {
    return jwt.sign(payload, secret);
};

//secret=> llave para desencriptar la data
export const verifyToken = (token) => {
    return jwt.verify(token, secret);
};

export const getToken = (authorization, res) => {
    // detecta si authorization viene vacio
    if (!authorization) {
      return res.status(403).json({
        ok: false,
        data: "User no authorized",
      });
    }
    //  valida si el formato el token tenga un Bearer 
    // si no lo tiene sera invalido

    // authorization = Bearer s45d6s54da65ad6
    // Bearer f2fds2fsd2d4
    //queremos saber que estan enviando bearer
    if (!authorization.includes("Bearer")) {
        return res.status(403).json({
          ok: false,
          data: "Invalid format",
        });
    }
    
    // quitar el bearer al string 
    return authorization.split(" ")[1];
};

export const checkToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    
    const token = getToken(authorization, res);
  
    const decoded = verifyToken(token);
  
    if (!decoded) {
      return res.status(403).json({
        ok: false,
        data: "Invalid token",
      });
    }
  
    req.decoded = decoded;
    next();
  };