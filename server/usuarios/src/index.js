require("reflect-metadata");
const express = require("express");
const { AppDataSource } = require("./data-source"); // Importar la conexión
const { Usuario } = require("./entity/Usuario");

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión exitosa a la base de datos");

    // Definir una ruta simple
    app.post("/usuarios", async (req, res) => {
      const { name, email, password } = req.body;
      const userRepository = AppDataSource.getRepository(Usuario); // Obtener el repositorio
      const user = userRepository.create({ name, email, password });
      await userRepository.save(user);
      res.send(user);
    });

    app.listen(3000, () => {
      console.log("Servidor corriendo en el puerto 3000");
    });
  })
  .catch((error) => console.log(error));
