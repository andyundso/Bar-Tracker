export interface GeocoderRequest {
    city?: String,
    housingNumber?: Number,
    postcode?: Number,
    street?: Number
}

export interface GeocoderResponse {
    coordinates: IPoint,
    placeName: String
}

export interface IPoint {
    x: number,
    y: number
}
