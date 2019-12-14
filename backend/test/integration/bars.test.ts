// SOURCE: https://www.valentinog.com/blog/testing-api-koa-jest/
// Require the Koa server
import {app} from '../../src/server'
import {databaseConnection} from "../../src/configuration/database";
import Bar from "../../src/entities/bar";
import barFixture from "../fixtures/bar.fixture";
import {clearDb} from "../helpers/helpers";

// Require supertest
const request = require('supertest');

const server = app.listen(3002).on("error", err => {
    console.error(err);
});

beforeAll(async () => {
    await databaseConnection;
});

afterEach(async () => {
    await server.close();
    await clearDb();
});

test("get all bars", async () => {
    for (let i: number = 0; i < 10; i++) {
        await barFixture();
    }

    const response = await request(server)
        .get("/bars");

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(10);
});

test("get a bar", async () => {
    const bar: Bar = await barFixture();

    const response = await request(server)
        .get("/bars/" + bar.id);

    expect(response.status).toEqual(200);

    const fetchedBar = response.body;
    expect(fetchedBar.name).toEqual("Good stuff");
    expect(fetchedBar.coordinates).toEqual({x: 1, y: 2});
});

test("create a bar", async () => {
    const response = await request(server)
        .post("/bars")
        .send({
            name: "Hello world",
            coordinates: {x: '1', y: '2'}
        });

    expect(response.status).toEqual(200);

    const createdBar = response.body;
    expect(createdBar.name).toEqual("Hello world");
    expect(createdBar.coordinates).toEqual({x: '1', y: '2'});
});

test("delete a bar", async () => {
    const bar: Bar = await barFixture();
    const countBeforeDelete: number = await Bar.count();

    const response = await request(server)
        .delete("/bars/" + bar.id);

    expect(response.status).toEqual(204);
    expect(await Bar.count()).toEqual(countBeforeDelete - 1)
});

test("update a bar", async () => {
    const bar: Bar = await barFixture();

    const response = await request(server)
        .patch("/bars/" + bar.id)
        .send({
            name: "Hello world",
            coordinates: {x: 3, y: 4}
        });

    expect(response.status).toEqual(200);

    const updatedBar = response.body;
    expect(updatedBar.name).toEqual("Hello world");
    expect(updatedBar.coordinates).toEqual({x: 3, y: 4});
});


