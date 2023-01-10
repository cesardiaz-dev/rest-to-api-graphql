import { checkRound, checkYear } from "../lib/utils";
import { F1 } from "./data-source";

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(pageElements: number = 1000, page: number = 1) {
        const offset: Number =  pageElements * (page - 1);

        return await this.get(`drivers.json?limit=${pageElements}&offset=${offset}`, {
            cacheOption: { ttl: 60 }
        });
    }

    async getDriversByYear(year: String) {
        year = checkYear(year);

        return await this.get(`${year}/drivers.json`, {
            cacheOption: { ttl: 60 }
        });
    }

    async getDriversByYearAndRound(year: String, round: Number) {
        year = checkYear(year);
        round = checkRound(round);

        return await this.get(`${year}/${round}/drivers.json`, {
            cacheOption: { ttl: 60 }
        });
    }

    async getDriverById(id: String) {

        return await this.get(`drivers/${id}.json`, {
            cacheOption: { ttl: 60 }
        });
    }
}