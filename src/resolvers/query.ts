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
        }
    }
};

export default query;