import { createConnection } from "typeorm";
import * as entities from "db/entities";

type Entities = {
  [entityName: string]: Function;
};

export async function createDatabaseConnection() {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "flooant",
    entities: Object.keys(entities).map(
      entityName => (entities as Entities)[entityName]
    ),
    dropSchema: true,
    synchronize: true,
    logging: false
  });
}
