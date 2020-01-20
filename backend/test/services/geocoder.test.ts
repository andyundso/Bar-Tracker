import {Geocoder} from "../../src/services/geocoder";

test("Test description", () => {
    expect(() => new Geocoder()).toThrow(SyntaxError);
});
