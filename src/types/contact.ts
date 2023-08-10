import { Socials } from '@/src/types/socials';

export type Contact = {
  content: {
    address1: string;
    address2: string;
    file: {
      name: string;
      fileUrl: string;
    };
    socials: Socials;
  };
};
