export type PropertyType =
  | 'for_sale'
  | 'ready_to_build'
  | 'for_rent'
  | 'sold'
  | 'off_market'
  | 'other'
  | 'new_community';

export type TransportationType =
  | 'bicycling'
  | 'driving'
  | 'transit'
  | 'walking';

export interface Pagination {
  offset: number;
  limit: number;
}
