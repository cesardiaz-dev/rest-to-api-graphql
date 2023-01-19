import { paginationOptions } from "../lib/utils";
import { F1 } from "./data-source";

export class CircuitsData extends F1 {
    constructor() {
        super();
    }

    async getCircuits(pageElements: number = 1000, page: number = 1) {
        return await this.get(`circuits.json?${paginationOptions(pageElements, page)}`, {
            cacheOption: { ttl: 60 }
        });
    }
}