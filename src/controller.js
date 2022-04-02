// // nuestro archivo que ontenga la logica de la application

// // al crear una funcion q export podemos usar esta para 
// // importar el otro archivo 
// const data = [
//     {
//         id: 1,
//         name: "Alvaro",
//         lastname: "Nova",
//         email: "alvaro@gmail.com",
//         password: "anova123"
//     },
//     {
//         id: 2,
//         name: "Ana",
//         lastname: "perry",
//         email: "perry@gmail.com",
//         password: "anova123"
//     },
//     {
//         id: 3,
//         name: "Andres",
//         lastname: "astamar",
//         email: "astamar@gmail.com",
//         password: "anova123"
//     },
//     {
//         id: 4,
//         name: "Ana",
//         lastname: "Nova",
//         email: "nova@gmail.com",
//         password: "anova123"
//     }
// ];
// export const index = (req, res) => {
//     res.json({
//         data:"test success",
//     });
// };

// export const login = (req, res) => {
//     const { email, password } = req.body;
    
//     res.json({
//         data: {
//             type: "login",
//             email,
//             password,
//         },
//     });
// };

// export const signup = (req, res) => {
//     const { name, lastname, email, password } = req.body;
//     const id = data.length + 1;
//     data.push({ id, name, lastname, email, password })
//     res.json({
//         data: {
//             type: "signup",
//             value: data[id - 1],
//         },
//     });
// };

// export const showuser = (req, res)=> {
//     const { id } = req.params;
//     let index = id - 1;
//     res.json({
//         data: {
//             type: "show user", 
//             value: data[index],
//         },
//     });
// };

// export const resetpassword = (req, res) => {
//     const { email } = req.body;
//     for( let i = 0; i<data.length; i++){
//         let correo = data[i]["email"];
//         if (email == correo){
//             res.json({
//                 type: "reset password",
//                 email,
//             });
//             res.end();
//         }else {
//             res.json("este correo no existe vuelva a intentar.");
//             res.end();
//         }
//     }
// };
    
// export const updateuser = (req, res) => {
//     const { id } = req.params;
//     const { name, lastname, email, password } = req.body;
//     let index = id = 1;
//     // actualza segun index q tenga la data
//     data[index] = {id, name, lastname, email, password};
//     // toda la data actualizada
//     res.json(data);
// };

// export const deleteuser = (req, res)=> {
//     const {id} = req.params;
//     let index = id = 1;
//     data.splice(index, 1);
//     res.json(data);
// };
// // destructuracion de objetos
// const obj={
//     name:"claudia",
//     age:"23",
//     lastname:"perez",
// };

//     //si queremos acceder a un elemento de un objeto ",name"
//     //los nombres de las variables q estan entre llaves deben ser igual a los keys
//     const {name: nombre, age, lastname }=obj;
//     console.log(nombre); //claudia
//     console.log(age); //23
//     console.log(lastname); //perez
    
