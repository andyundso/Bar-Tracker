import * as Koa from 'koa';
import {barController} from "./controllers/bar.controller";

const app = new Koa();

app.use(barController.routes);
app.use(barController.allowedMethods);

app.listen(3000);

console.log('Server running on port 3000');

