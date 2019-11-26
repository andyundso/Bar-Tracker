import * as Koa from 'koa';
import {barController} from "./controllers/bar.controller";
import {databaseConnection} from "./configuration/database";

const PORT: number = Number(process.env.PORT) || 3000;

const app = new Koa();

app.use(barController.routes);
app.use(barController.allowedMethods);

databaseConnection
    .then(() => app.listen(PORT))
    .catch(console.error);

console.log('Server running on port 3000');

