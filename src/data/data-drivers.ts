import { checkRound, checkYear } from "../lib/utils";
import { F1 } from "./data-source";

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers() {
        return await this.get("drivers.json?limit=1000", {
            cacheOption: { ttl: 60 }
        });
    }

    // async getRacesByYear(year: String) {
    //     year = checkYear(year);

    //     return await this.get(`${year}.json`, {
    //         cacheOption: { ttl: 60 }
    //     });
    // }

    // async getYearRound(year: String, round: Number) {
    //     year = checkYear(year);
    //     round = checkRound(round);

    //     return await this.get(`${year}/${round}.json`, {
    //         cacheOption: { ttl: 60 }
    //     });
    // }
}