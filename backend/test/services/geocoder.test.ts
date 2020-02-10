import {Geocoder} from "../../src/services/geocoder";
import axios from 'axios';
import {importDotEnv} from "../helpers/helpers";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("Initialize Class without Api token", () => {
    expect(() => new Geocoder()).toThrow(SyntaxError);
});

test("Should return an empty array if no hits were found", () => {
    importDotEnv();

    mockedAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: {
                features: []
            }
        })
    );

    return new Geocoder().geocodeAddress({housingNumber: 6}).then(response => {
        expect(response).toEqual([]);
    });
});

test("Should return an array if API hits something", () => {
    importDotEnv();

    mockedAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: {
                features: [
                    {
                        geometry: {
                            coordinates: [5, 25]
                        },
                        place_name: "Something"
                    },
                    {
                        geometry: {
                            coordinates: [25, 69]
                        },
                        place_name: "Mystialand"
                    }
                ]
            }
        })
    );

    return new Geocoder().geocodeAddress({housingNumber: 6}).then(response => {
        expect(response.length).toEqual(2);

        expect(response[0].coordinates.x).toEqual(5);
        expect(response[0].coordinates.y).toEqual(25);
        expect(response[0].placeName).toEqual("Something");

        expect(response[1].coordinates.x).toEqual(25);
        expect(response[1].coordinates.y).toEqual(69);
        expect(response[1].placeName).toEqual("Mystialand");
    });
});
