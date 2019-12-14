import * as Koa from 'koa';
import {barController} from "./controllers/bar.controller";

const innerApp = new Koa();

innerApp.use(barController.routes());
innerApp.use(barController.allowedMethods());

export const app = innerApp;
