import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        seasonList: async (_:void, __: any, {dataSources}) => {
            return await dataSources.seasons.getSeasons().then((data: any) => data.MRData.SeasonTable.Seasons);
        }
    }
};

export default query;