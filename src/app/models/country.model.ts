export interface LocationResponse {
    IPv4: "45.167.92.31";
    city: string | null;
    country_code: string;
    country_name: string;
    latitude: number;
    longitude: -99.0111;
    state: null
    postal: string | null;
}

export interface Country {
    emoji: string;
    iso_2: string;
    name_es: string;
    phone_code: string;
}

export interface CountriesResponse {
    data: {
        countries: Country[];
    };
    message: string;
    success: boolean;
}
