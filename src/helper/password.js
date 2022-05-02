// npm i object-hash
import hash from "object-hash";
// es para q el texto se pase a encriptar (numeros random)
export const hashPassword = (password) => {
    return hash(password);
};