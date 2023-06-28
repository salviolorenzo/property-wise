import { CamelCasedPropertiesDeep } from 'type-fest';

export type GetPropertyImagesResponse = {
  data: {
    home_search: {
      __typename: string;
      results: PropertyImages[];
    };
  };
};

export type PropertyImages = {
  __typename: string;
  property_id: string;
  listing_id: string;
  photos: PropertyImage[];
};

export type PropertyImage = {
  __typename: string;
  href: string;
  type?: string;
  tags: { __typename: string; label: string; probability: number }[];
};

export type MappedGetPropertyImagesResponse =
  CamelCasedPropertiesDeep<GetPropertyImagesResponse>;
export type MappedPropertyImages = CamelCasedPropertiesDeep<PropertyImages>;
export type MappedPropertyImage = CamelCasedPropertiesDeep<PropertyImage>;
