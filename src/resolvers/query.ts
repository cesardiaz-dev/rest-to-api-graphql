import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        seasonList: async (_: void, __: any, { dataSources }) => {
            return await dataSources.seasons.getSeasons()
                .then((data: any) => data.MRData.SeasonTable.Seasons);
        },
        racesByYear: async (_: void, { year }, { dataSources }) => {
            return await dataSources.races.getRacesByYear(year)
                .then((data: any) => data.MRData.RaceTable.Races);
        },
        raceSelect: async (_: void, { year, round }, { dataSources }) => {
            return await dataSources.races.getYearRound(year, round)
                .then((data: any) => data.MRData.RaceTable.Races[0]);
        },
        historyDrivers: async (_: void, { pageElements, page }, { dataSources }) => {
            return await dataSources.drivers.getDrivers(pageElements, page)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        driversByYear: async (_: void, { year }, { dataSources }) => {
            return await dataSources.drivers.getDriversByYear(year)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        driversByYearAndRound: async (_: void, { year, round }, { dataSources }) => {
            return await dataSources.drivers.getDriversByYearAndRound(year, round)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        driverById: async (_: void, { id }, { dataSources }) => {
            return await dataSources.drivers.getDriverById(id)
                .then((data: any) => data.MRData.DriverTable.Drivers[0]);
        },
        seasonDriverRanking: async (_: void, { year }, { dataSources }) => {
            return await dataSources.drivers.getSeasonDriverRanking(year)
                .then((data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        },
        historyCircuits: async (_: void, { pageElements, page }, { dataSources }) => {
            return await dataSources.circuits.getCircuits(pageElements, page)
                .then((data: any) => data.MRData.CircuitTable.Circuits);
        }
    }
};

export default query;