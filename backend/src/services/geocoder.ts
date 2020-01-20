export class Geocoder {

    apiToken: String;

    constructor() {
        if (process.env.MAP_BOX_API_KEY) {
            this.apiToken = process.env.MAP_BOX_API_KEY;
        } else {
            throw new SyntaxError("No API Token for Mapbox provided!")
        }
    }
}
