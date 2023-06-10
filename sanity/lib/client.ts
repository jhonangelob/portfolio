import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const config = { apiVersion, dataset, projectId, useCdn };

export const sanityClient = createClient(config);
