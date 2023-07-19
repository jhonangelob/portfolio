import { sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const fetchTextContent = async () => {
  try {
    const query = groq`
      *[_type == "textContent"] {
        _id, 
        jobTitle, 
        aboutMainText, 
        aboutTldr, 
        technologyMainText, 
        technologySubText1,
        technologySubText2,
        contactAddress1,
        contactAddress2
      } | order(_createdAt, desc)[0]
    `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProjects = async () => {
  try {
    const query = groq`
      *[_type == "project"] {
        _id, 
        title, 
        description, 
        technologies, 
        source, 
        link
      }
    `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchExperiences = async () => {
  try {
    const query = groq`
    *[_type == "experience"] {
      _id,
      _createdAt,
      position,
      company,
      startDate,
      endDate,
      isPresent
    } | order(_createdAt, desc)
  `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchResume = async () => {
  try {
    const query = groq`
      *[_type == 'resume'][0] {
        name,
        "fileUrl": file.asset->url
      }
    `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTechnologies = async () => {
  try {
    const query = groq`
      *[_type == 'technology'] {
        _createdAt,
        title,
        'items': items[] {
          alt,
          'src': src.asset->url
        } 
      } | order(_createdAt, asc)
    `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSocials = async () => {
  try {
    const query = groq`
      *[_type == 'social'] {
        _createdAt,
        name,
        url
      } | order(_createdAt, asc)
    `;
    const response = await sanityClient.fetch(query, { cache: 'no-store' });
    return response;
  } catch (error) {
    console.error(error);
  }
};
