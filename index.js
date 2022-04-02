// 
import { app } from "./src/app.js";


// import express from "express";

// const app = express();
// // como crear ruta en express:
// app.get('/',(res, res)=>{
//     // cuando vamos a construir un API las respeustas
//     // q enviemos deben ser en formato JSON 
//     // res tiene la opcioin de poder enviar un formatio con JSON
//     // res.json
//     res.json({
//         data: "success"
//     });
// });

// como iniciar un servidor en express:
// puedo usar cualquier puerto, los recomendados son:3000,6000,9000,3001
app.listen(3000);