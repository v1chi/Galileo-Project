import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source"; // Importar la conexión
import { Usuario } from "./entity/Usuario";

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
