import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "usuarios_db",
  synchronize: true,
  logging: false,
  entities: [Usuario],
});
