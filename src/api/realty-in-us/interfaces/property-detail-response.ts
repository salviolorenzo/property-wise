import { CamelCasedPropertiesDeep } from 'type-fest';

export interface PropertyDetailResponse {
  data: {
    home: PropertyDetail;
  };
}

export type PropertyDetail = {
  data: {
    home: {
      __typename: string;
      property_id: string;
      last_update_date: string;
      last_price_change_date: any;
      last_price_change_amount: any;
      listing_id: string;
      status: string;
      href: string;
      days_on_market: any;
      list_date: string;
      create_date: string;
      mortgage: {
        __typename: string;
        property_tax_rate: number;
        rates_url: string;
        insurance_rate: number;
        estimate: {
          __typename: string;
          loan_amount: number;
          monthly_payment: number;
          total_payment: number;
          down_payment: any;
          average_rate: {
            __typename: string;
            rate: number;
            loan_type: { __typename: string; term: number };
          };
          monthly_payment_details: {
            __typename: string;
            type: string;
            amount: number;
            display_name: string;
          }[];
        };
        average_rates: {
          __typename: string;
          loan_type: { __typename: string; loan_id: string };
          rate: number;
        }[];
      };
      hoa: any;
      buyers: any;
      description: {
        __typename: string;
        baths_consolidated: string;
        baths: number;
        baths_min: any;
        baths_max: any;
        heating: any;
        cooling: any;
        beds: number;
        beds_min: any;
        beds_max: any;
        garage: any;
        garage_min: any;
        garage_max: any;
        pool: any;
        sqft: number;
        sqft_min: any;
        sqft_max: any;
        styles: any;
        lot_sqft: any;
        units: any;
        stories: any;
        type: string;
        sub_type: string;
        text: string;
        year_built: any;
        name: any;
      };
      pet_policy: {
        __typename: string;
        cats: boolean;
        dogs: boolean;
        dogs_small: boolean;
        dogs_large: any;
      };
      assigned_schools: {
        __typename: string;
        schools: {
          __typename: string;
          district: {
            __typename: string;
            name: string;
            id: string;
            phone: any;
            student_count: any;
            grades: any;
          };
        }[];
      };
      nearby_schools: {
        __typename: string;
        schools: {
          __typename: string;
          assigned: boolean;
          coordinate: { __typename: string; lat: number; lon: number };
          distance_in_miles: number;
          district: { __typename: string; id: string; name: string };
          education_levels: string[];
          funding_type: string;
          grades: string[];
          id: string;
          name: string;
          parent_rating: any;
          rating: number;
          student_count: number;
        }[];
      };
      schools: {
        __typename: string;
        schools: {
          __typename: string;
          assigned: boolean;
          coordinate: { __typename: string; lat: number; lon: number };
          distance_in_miles: number;
          district: { __typename: string; id: string; name: string };
          education_levels: string[];
          funding_type: string;
          grades: string[];
          id: string;
          name: string;
          parent_rating: any;
          rating: number;
          student_count: number;
        }[];
      };
      products: any;
      list_price: number;
      list_price_min: any;
      list_price_max: any;
      price_per_sqft: number;
      community: any;
      lead_attributes: {
        __typename: string;
        opcity_lead_attributes: {
          __typename: string;
          flip_the_market_enabled: any;
          cashback_enabled: any;
          phones: any;
          local_phone: any;
        };
        ready_connect_mortgage: {
          __typename: string;
          show_contact_a_lender: any;
          show_veterans_united: any;
        };
        show_contact_an_agent: boolean;
        lead_type: string;
        show_lead_form: boolean;
        disclaimer_text: any;
        is_tcpa_message_enabled: any;
        show_text_leads: boolean;
      };
      flags: {
        __typename: string;
        is_contingent: any;
        is_garage_present: any;
        is_new_construction: any;
        is_pending: any;
        is_short_sale: any;
        is_foreclosure: any;
        is_senior_community: any;
        is_for_rent: boolean;
        is_deal_available: any;
        is_price_excludes_land: any;
        is_promotion_present: any;
        is_subdivision: any;
        is_plan: any;
        is_price_reduced: any;
        is_new_listing: boolean;
        is_coming_soon: any;
      };
      provider_url: { __typename: string; href: string };
      source: {
        __typename: string;
        id: string;
        disclaimer: any;
        listing_id: string;
        plan_id: any;
        spec_id: any;
        community_id: any;
        name: string;
        type: string;
        raw: any;
      };
      details: { __typename: string; category: string; text: string[] }[];
      open_houses: any;
      tax_history: any;
      location: {
        __typename: string;
        address: {
          __typename: string;
          line: string;
          street_number: string;
          street_name: string;
          street_suffix: string;
          unit: string;
          city: string;
          state_code: string;
          postal_code: string;
          state: string;
          coordinate: { __typename: string; lat: number; lon: number };
        };
        county: { __typename: string; fips_code: string };
        street_view_url: any;
        neighborhoods: {
          __typename: string;
          name: string;
          city: string;
          level: string;
          geo_statistics: {
            __typename: string;
            housing_market: {
              __typename: string;
              median_price_per_sqft: any;
              median_sold_price: any;
              median_listing_price: any;
              median_days_on_market: any;
            };
          };
        }[];
      };
      branding: undefined[];
      consumer_advertisers: {
        __typename: string;
        advertiser_id: any;
        office_id: any;
        agent_id: any;
        name: any;
        phone: any;
        type: string;
        href: any;
        slogan: any;
        photo: { __typename: string; href: any };
        show_realtor_logo: any;
        hours: any;
      }[];
      advertisers: {
        __typename: string;
        fulfillment_id: any;
        name: any;
        type: string;
        team_name: any;
        email: any;
        href: any;
        state_license: any;
        phones: any;
        office: {
          __typename: string;
          fulfillment_id: any;
          name: any;
          href: any;
          photo: any;
          email: string;
          phones: {
            __typename: string;
            number: string;
            type: string;
            ext: any;
          }[];
        };
        broker: any;
        photo: any;
      }[];
      photo_count: number;
      photos: {
        __typename: string;
        href: string;
        type: string;
        tags: { __typename: string; label: string; probability: number }[];
      }[];
      property_history: {
        __typename: string;
        date: string;
        event_name: string;
        price: number;
        source_name: string;
        listing: {
          __typename: string;
          photos: {
            __typename: string;
            href: string;
            type: string;
            tags: { __typename: string; label: string; probability: number }[];
          }[];
          description: { __typename: string; sqft: number };
        };
      }[];
      local: {
        __typename: string;
        noise: {
          __typename: string;
          score: number;
          noise_categories: {
            __typename: string;
            type: string;
            text: string;
          }[];
        };
        flood: {
          __typename: string;
          flood_factor_score: number;
          fema_zone: string[];
        };
      };
      last_sold_price: any;
      last_sold_date: any;
      estimates: {
        __typename: string;
        current_values: any;
        historical_values: any;
        forecast_values: any;
      };
      virtual_tours: any;
      videos: any;
      matterport: any;
      terms: any;
      monthly_fees: any;
      one_time_fees: any;
      units: any;
    };
  };
};

export type MappedPropertyDetail = CamelCasedPropertiesDeep<PropertyDetail>;
