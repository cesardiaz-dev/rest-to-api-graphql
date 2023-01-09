import { F1 } from "./data-source";

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getRacesByYear(year: String) {
        const currentYear = new Date().getFullYear();
        if(isNaN(+year) || +year < 1950 || +year > currentYear) {
            year = String(currentYear);
        }

        return await this.get(`${year}.json`, {
            cacheOption: { ttl: 60 }
        });
    }
}