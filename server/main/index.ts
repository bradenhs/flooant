import "reflect-metadata";
import { createDatabaseConnection } from "db/main";

init();

async function init() {
  await createDatabaseConnection();
}
