import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import project from './schemas/project';
import experience from './schemas/experience';
import resume from './schemas/resume';
import technology from './schemas/technology';
import social from './schemas/social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, experience, resume, technology, social, blockContent],
};
