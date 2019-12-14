import * as Koa from 'koa';
import {barController} from "./controllers/bar.controller";
import * as bodyParser from "koa-bodyparser";

const innerApp = new Koa();

innerApp.use(bodyParser());

innerApp.use(barController.routes());
innerApp.use(barController.allowedMethods());

export const app = innerApp;
