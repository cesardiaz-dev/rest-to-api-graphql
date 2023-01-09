import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

// Los resolvers de las operaciones de modificación de información
const type: IResolvers = {
    Season: {
      year: parent => parent.season,
      urlMobile: parent => getWikipediaMobileUrl(parent.url)
    }
};

export default type;