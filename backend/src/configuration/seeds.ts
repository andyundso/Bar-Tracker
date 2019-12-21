import 'reflect-metadata';
import Bar from "../entities/bar";
import {clearDb} from "../../test/helpers/helpers";
import Visit from "../entities/visit";

clearDb().then(() => {
    const kennedys = new Bar;
    kennedys.name = "Kennedy's Irish Pub";
    kennedys.coordinates = {x: 47.3773415, y: 8.5332076};
    kennedys.save().then(kennedys => {
        const kennedyVisit = new Visit;
        kennedyVisit.date = '2019-12-14';
        kennedyVisit.bar = kennedys;
        kennedyVisit.save();
    });

    const poliBar = new Bar;
    poliBar.name = "Poli Bar";
    poliBar.coordinates = {x: 47.3731723, y: 8.5144566};
    poliBar.save().then(poliBar => {
        const poliVisit = new Visit;
        poliVisit.date = '2019-11-16';
        poliVisit.bar = poliBar;
        poliVisit.save();
    });

    const porterHouse = new Bar;
    porterHouse.name = "The Porter House";
    porterHouse.coordinates = {x: 47.3501404, y: 8.7196706};
    porterHouse.save().then(porterHouse => {
        const porterHouseVisit = new Visit;
        porterHouseVisit.date = '2019-12-07';
        porterHouseVisit.bar = porterHouse;
        porterHouseVisit.save();
    });
}).catch(console.error);
