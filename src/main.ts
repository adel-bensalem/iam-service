///<reference path="global.d.ts"/>

import "./config";
import express from "express";
import { MongoClient } from "mongodb";
import { createCore } from "./core/main";
import { createController } from "./controllers/main";
import { createPresenter } from "./libs/presenter";
import { createRepository } from "./libs/repository";
import { createPasswordEncryptor } from "./libs/passwordEncryptor";
import { createTokenProvider } from "./libs/tokenProvider";
import { createSafeGuard } from "./libs/safeGuard";
import { router } from "./router/main";

const app = express();
const port = process.env.PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const tokenSecret = process.env.JWT_SECRET || "";

const mongoClient = new MongoClient(
  `mongodb://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const listenToExit = (cleanUp: () => void) => {
  process.on("exit", cleanUp);
  process.on("SIGINT", cleanUp);
  process.on("SIGUSR1", cleanUp);
  process.on("SIGUSR2", cleanUp);
  process.on("uncaughtException", cleanUp);
};

mongoClient.connect().then(() => {
  app.use(express.json());
  app.use((req, res, next) => {
    const presenter = createPresenter(res);
    req.controller = createController(
      createCore({
        repository: createRepository(mongoClient.db(dbName)),
        presenter,
        passwordEncryptor: createPasswordEncryptor(),
        tokenProvider: createTokenProvider(tokenSecret),
        safeGuard: createSafeGuard(tokenSecret),
      }),
      req,
      res
    );

    next();
  });

  app.use(router);

  const server = app.listen(port, () =>
    console.log(`App listening on port ${port}`)
  );

  listenToExit(() => {
    server.close();
    mongoClient.close(true);
  });
});
