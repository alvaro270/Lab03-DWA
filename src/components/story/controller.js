import { prisma } from "../../db";
// Esto va a actuar como si fuera una base de local
// en verdad es un array de objetos

// const stories = [
//     {
//       id: 1,
//       name: "Harry Potter",
//       author: "J.K. Rowling",
//       image:
//         "https://phantom-marca.unidadeditorial.es/70cdeb1501a33c2c567dabbebc270ddd/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/17/16371568440299.jpg",
//       description:
//         "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people) worldwide.",
//     },
//   ];
  /**
   * 
   Vamos a enviarle al cliente el siguiente
   en res podemos el statis res.status(200).json()
    {
      ok: // true || false esto va a indicar y si la peticion es success o error
      data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
    }
   */
  
  // Listar
  // METHOD: GET
  export const list = async (req, res) => {
    try {
      const stories = await prisma.story.findMany();
  
      return res.status(200).json({
        ok: true,
        data: stories,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        data: error.message,
      });
    }
    // lista los stories
  
    // return res.status(200).json({
    //   ok: true,
    //   data: stories,
    // });
  };
  
  // Crear
  // METHOD: POST
  export const store = async (req, res) => {
    try {
      const stories = await  prisma.story.create({
        data: { ...req.body },
      });
  
      return res.status(201).json({
        ok: true,
        data: stories,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        data: error.message,
      });
    }
    // crea un story
    // note: Recurden que el estado de creacion es 201
    // const body = req.body;
    // body.id = stories.length + 1;
    // stories.push(body);
  
    // return res.status(201).json({
    //   ok: true,
    //   data: "Store Success",
    // });
  };
  
  // Editar
  // METHOD: PUT
  export const update = async (req, res) => {
    // edita un story
    try {
      const { id } = req.params;
      const stories = await prisma.story.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      return res.status(200).json({
        ok: true,
        data: stories,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        data: error.message,
      });
    }
    // const { id } = req.params;
    // const { name } = req.body;
    // const { author } = req.body;
    // const { image } = req.body;
    // const { description } = req.body;

    // const search = stories.find((story) => story.id === parseInt(id));
    // if (search < 0) {
    //   return res.status(404).json({
    //     ok: false,
    //     data: "Story not found",
    //   });
    // } else {
    //   search.name = name;
    //   search.author = author;
    //   search.image = image;
    //   search.description = description;
    //   return res.status(200).json({
    //     ok: true,
    //     data: search,
    //   });
    // }
  };
  
  // Eliminar
  // METHOD: DELETE
  export const destroy = async (req, res) => {
    // elimina un story
    try {
      const { id } = req.params;
      await prisma.story.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({
        ok: true,
        data: "story eliminado",
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        data: error.message,
      });
    }
    // const { id } = req.params;
    // const search = stories.filter((story) => story.id !== parseInt(id));
    // res.status(200).json(search);
  };
  