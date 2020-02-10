import axios from "axios";
import {GeocoderRequest, GeocoderResponse} from "../../types";

export class Geocoder {

    private readonly apiToken: String;
    private readonly apiUrl: String = "https://api.mapbox.com/geocoding/v5/mapbox.places";

    constructor(apiUrl?: String) {
        if (process.env.MAP_BOX_API_KEY) {
            this.apiToken = process.env.MAP_BOX_API_KEY;
            this.apiUrl = apiUrl ? apiUrl : this.apiUrl;
        } else {
            throw new SyntaxError("No API Token for Mapbox provided!")
        }
    }

    async geocodeAddress(request: GeocoderRequest): Promise<Array<GeocoderResponse>> {
        const response = await axios.get(`${this.apiUrl}/${this.requestToString(request)}.json`, {
            params: {
                access_token: this.apiToken
            },
        });

        return response.data.features.map((places: any) => ({
                coordinates: {
                    x: places.geometry.coordinates[0],
                    y: places.geometry.coordinates[1],
                },
                placeName: places.place_name,
            })
        )
    }

    private requestToString(request: GeocoderRequest): String {
        return `${request.housingNumber} ${request.street}, ${request.city}, ${request.postcode}`
    }
}
