import 'reflect-metadata';
import Bar from "../entities/bar";
import {clearDb} from "../../test/helpers/helpers";

clearDb().then(() => {
    const kennedys = new Bar;
    kennedys.name = "Kennedy's Irish Pub";
    kennedys.coordinates = {x: 47.3773415, y: 8.5332076};
    kennedys.save();

    const poliBar = new Bar;
    poliBar.name = "Poli Bar";
    poliBar.coordinates = {x: 47.3731723, y: 8.5144566};
    poliBar.save();

    const porterHouse = new Bar;
    porterHouse.name = "The Porter House";
    porterHouse.coordinates = {x: 47.3501404, y: 8.7196706};
    porterHouse.save();
}).catch(console.error);
