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
        }
    }
};

export default query;