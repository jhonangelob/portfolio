import { Social } from '@/utils/types';

export type Props = {
  content: {
    address1: string;
    address2: string;
    file: {
      name: string;
      fileUrl: string;
    };
    socials: Social;
  };
};
