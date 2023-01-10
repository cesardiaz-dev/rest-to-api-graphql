import { checkRound, checkYear } from "../lib/utils";
import { F1 } from "./data-source";

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getRacesByYear(year: String) {
        year = checkYear(year);

        return await this.get(`${year}.json`, {
            cacheOption: { ttl: 60 }
        });
    }

    async getYearRound(year: String, round: Number) {
        year = checkYear(year);
        round = checkRound(round);

        return await this.get(`${year}/${round}.json`, {
            cacheOption: { ttl: 60 }
        });
    }
}