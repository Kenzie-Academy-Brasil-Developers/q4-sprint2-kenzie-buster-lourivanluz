import app from "./app";
import "reflect-metadata";
import { createConnection } from "typeorm";
import dbConfig from "./db/ormconfig";

createConnection(dbConfig)
  .then(() => {
    const PORT = process.env.PORT;
    console.log("database conncected");
    app.listen(PORT, () => console.log(`app running in port ${PORT}`));
  })
  .catch((err) => console.log(err));
