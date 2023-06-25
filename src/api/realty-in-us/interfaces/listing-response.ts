import { CamelCasedPropertiesDeep } from 'type-fest';
import { PropertyType } from '../types';

export type ListingBranding = {
  __typename: string;
  photo: any;
  name: any;
  phone: string | null;
  link: string | null;
};

export type ListingLocation = {
  __typename: string;
  address: {
    __typename: string;
    city: string;
    line: string;
    street_name: string;
    street_number: string;
    street_suffix: string;
    country: string;
    postal_code: string;
    state_code: string;
    state: string;
    coordinate: {
      __typename: string;
      lat: number;
      lon: number;
      accuracy: string;
    };
  };
  street_view_url: string;
  county: {
    __typename: string;
    fips_code: string;
  };
};

export type ListingDescription = {
  __typename: string;
  sub_type: string;
  type: string;
  beds: number;
  baths: number;
  lot_sqft: number;
  sqft: number;
  beds_max: string | null;
  beds_min: string | null;
  sqft_max: string | null;
  sqft_min: string | null;
  baths_full: string | null;
  baths_half: string | null;
  baths_min: string | null;
  baths_max: string | null;
  baths_full_calc: string | null;
  baths_partial_calc: string | null;
};

export type ListingAdvertiser = {
  __typename: string;
  fulfillment_id: string;
  name: string;
  email: string;
  href: any;
  slogan: any;
  type: string;
};

export type ListingFlag = {
  __typename: string;
  is_price_reduced: boolean | string | null;
  is_new_construction: boolean | string | null;
  is_foreclosure: boolean | string | null;
  is_plan: boolean | string | null;
  is_new_listing: boolean | string | null;
  is_coming_soon: boolean | string | null;
  is_contingent: boolean | string | null;
  is_pending: boolean | string | null;
};

export type ListingAgent = {
  __typename: string;
  id: string | null;
  agent_id: string | null;
  agent_name: string | null;
  office_id: string | null;
  office_name: string | null;
};

export type ListingSource = {
  __typename: string;
  agents: ListingAgent[];
  id: string;
  type: string;
  spec_id: string | null;
  plan_id: string | null;
  listing_href: string | null;
  listing_id: string;
};

export type Listing = {
  __typename: string;
  property_id: string;
  listing_id: string;
  plan_id: any;
  status: PropertyType;
  photo_count: number;
  branding: ListingBranding[];
  location: ListingLocation;
  open_houses: any;
  description: ListingDescription;
  virtual_tours: any;
  matterport: boolean;
  advertisers: ListingAdvertiser[];
  flags: ListingFlag[];
  source: ListingSource;
  pet_policy: string | null;
  community: string | null;
  primary_photo: {
    __typename: string;
    href: string | null;
  };
  href: string | null;
  list_price: number | null;
  list_price_min: number | null;
  list_price_max: number | null;
  price_reduced_amount: number | null;
  estimate: number | null;
  lead_attributes: object;
  last_sold_date: string;
  list_date: string;
  products: object;
  last_sold_price: number;
};

export type ListingSearchResponse = {
  data: {
    home_search: {
      __typename: string;
      count: number;
      total: number;
      results: Listing[];
    };
  };
};

export type ListingSearchResults = {
  __typename: string;
  count: number;
  total: number;
  results: Listing[];
};

export type MappedListing = CamelCasedPropertiesDeep<Listing>;
export type MappedListingSearchResponse =
  CamelCasedPropertiesDeep<ListingSearchResponse>;
export type MappedListingSearchResults =
  CamelCasedPropertiesDeep<ListingSearchResults>;
export type MappedListingBranding = CamelCasedPropertiesDeep<ListingBranding>;
export type MappedListingLocation = CamelCasedPropertiesDeep<ListingLocation>;
export type MappedListingDescription =
  CamelCasedPropertiesDeep<ListingDescription>;
export type MappedListingAdvertiser =
  CamelCasedPropertiesDeep<ListingAdvertiser>;
export type MappedListingFlag = CamelCasedPropertiesDeep<ListingFlag>;
export type MappedListingAgent = CamelCasedPropertiesDeep<ListingAgent>;
export type MappedListingSource = CamelCasedPropertiesDeep<ListingSource>;
