import * as Koa from 'koa';
import {barController} from "./controllers/bar.controller";
import * as bodyParser from "koa-bodyparser";
import * as CORS from "@koa/cors"

const innerApp = new Koa();

innerApp.use(bodyParser());
innerApp.use(CORS());

innerApp.use(barController.routes());
innerApp.use(barController.allowedMethods());

export const app = innerApp;
