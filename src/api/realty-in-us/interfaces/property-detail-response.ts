export interface PropertyDetailResponse {
  data: {
    home: PropertyDetail;
  };
}

export interface PropertyDetail {
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
    property_tax_rate: 0.0204;
    rates_url: string;
    insurance_rate: 0.009375;
    estimate: {
      __typename: string;
      loan_amount: 775;
      monthly_payment: 8;
      total_payment: 1893;
      down_payment: 0;
      average_rate: {
        __typename: string;
        rate: 0.07195;
        loan_type: {
          __typename: string;
          term: 30;
        };
      };
      monthly_payment_details: [
        {
          __typename: string;
          type: string;
          amount: 5;
          display_name: string;
        },
        {
          __typename: string;
          type: string;
          amount: 1;
          display_name: string;
        },
        {
          __typename: string;
          type: string;
          amount: 0;
          display_name: string;
        },
        {
          __typename: string;
          type: string;
          amount: 1;
          display_name: string;
        },
        {
          __typename: string;
          type: string;
          amount: 1;
          display_name: string;
        },
      ];
    };
    average_rates: [
      {
        __typename: string;
        loan_type: {
          __typename: string;
          loan_id: string;
        };
        rate: 0.07195;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'twenty_year_fix';
        };
        rate: 0.07091;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'fifteen_year_fix';
        };
        rate: 0.06395;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'ten_year_fix';
        };
        rate: 0.06338;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'thirty_year_fha';
        };
        rate: 0.06913;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'thirty_year_va';
        };
        rate: 0.06889;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'five_one_arm';
        };
        rate: 0.06696;
      },
      {
        __typename: 'Rate';
        loan_type: {
          __typename: 'LoanType';
          loan_id: 'seven_one_arm';
        };
        rate: 0.06746;
      },
    ];
  };
  hoa: any;
  buyers: any;
  description: {
    __typename: 'HomeDescription';
    baths_consolidated: '1';
    baths: 1;
    baths_min: any;
    baths_max: any;
    heating: any;
    cooling: any;
    beds: 1;
    beds_min: any;
    beds_max: any;
    garage: any;
    garage_min: any;
    garage_max: any;
    pool: any;
    sqft: 650;
    sqft_min: any;
    sqft_max: any;
    styles: any;
    lot_sqft: any;
    units: any;
    stories: any;
    type: 'apartment';
    sub_type: 'condo';
    text: 'Amazing 1 bedroom, 1 bathroom apartment in McAllen. ALL UTILITIES INCLUDED in the rent EXCEPT for electricity. Use of the onsite laundry facility is included in the rent (no coins needed). Small pets are allowed for an additional cost. Amenities included: balcony, central air, central heat, deck, hardwood like floors, large storage room and laundry in building. Access to a private swimming pool is available. Utilities included: cable, internet, wifi and water. Date Available: Jun 24th 2023. $775/month rent. $775 security deposit required. Contact West Fern Apartments to learn more.';
    year_built: any;
    name: any;
  };
  pet_policy: {
    __typename: 'HomePetPolicy';
    cats: true;
    dogs: true;
    dogs_small: true;
    dogs_large: any;
  };
  assigned_schools: {
    __typename: 'SchoolList';
    schools: [
      {
        __typename: 'School';
        district: {
          __typename: 'SchoolDistrict';
          name: 'Mcallen Independent School District';
          id: '06211438051';
          phone: any;
          student_count: any;
          grades: any;
        };
      },
      {
        __typename: 'School';
        district: {
          __typename: 'SchoolDistrict';
          name: 'Mcallen Independent School District';
          id: '06211438051';
          phone: any;
          student_count: any;
          grades: any;
        };
      },
      {
        __typename: 'School';
        district: {
          __typename: 'SchoolDistrict';
          name: 'Mcallen Independent School District';
          id: '06211438051';
          phone: any;
          student_count: any;
          grades: any;
        };
      },
    ];
  };
  nearby_schools: {
    __typename: 'SchoolList';
    schools: [
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.238219;
          lon: -98.227573;
        };
        distance_in_miles: 0.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['elementary'];
        funding_type: 'public';
        grades: ['PK', 'K', '1', '2', '3', '4', '5'];
        id: '0768637931';
        name: 'Milam Elementary School';
        parent_rating: any;
        rating: 8;
        student_count: 838;
      },
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.226262;
          lon: -98.238437;
        };
        distance_in_miles: 0.8;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['high'];
        funding_type: 'public';
        grades: ['9', '10', '11', '12'];
        id: '0768637921';
        name: 'Mcallen High School';
        parent_rating: 2;
        rating: 5;
        student_count: 2307;
      },
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.269825;
          lon: -98.224518;
        };
        distance_in_miles: 2.6;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['middle'];
        funding_type: 'public';
        grades: ['6', '7', '8'];
        id: '0768638101';
        name: 'Morris Middle School';
        parent_rating: 4;
        rating: 9;
        student_count: 906;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.226369;
          lon: -98.225802;
        };
        distance_in_miles: 0.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211428551';
          name: any;
        };
        education_levels: ['elementary'];
        funding_type: 'private';
        grades: ['PK', 'K', '1', '2', '3', '4', '5', '6'];
        id: '0768678701';
        name: 'St Johns Episcopal Day School';
        parent_rating: 5;
        rating: any;
        student_count: 148;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.241361;
          lon: -98.227728;
        };
        distance_in_miles: 0.6;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211428551';
          name: any;
        };
        education_levels: ['elementary'];
        funding_type: 'private';
        grades: ['PK', 'K', '1', '2', '3', '4', '5'];
        id: '0768681741';
        name: 'Central Christian School';
        parent_rating: 4;
        rating: any;
        student_count: 83;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.226698;
          lon: -98.22028;
        };
        distance_in_miles: 0.6;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['elementary'];
        funding_type: 'public';
        grades: ['PK', 'K', '1', '2', '3', '4', '5'];
        id: '0768637861';
        name: 'Jackson Elementary School';
        parent_rating: 2;
        rating: 7;
        student_count: 672;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.240046;
          lon: -98.23877;
        };
        distance_in_miles: 0.9;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['high'];
        funding_type: 'public';
        grades: ['10', '11'];
        id: '0768848501';
        name: 'Southwest Key Program';
        parent_rating: any;
        rating: any;
        student_count: 1;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.218008;
          lon: -98.219114;
        };
        distance_in_miles: 1.1;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211428551';
          name: any;
        };
        education_levels: ['elementary', 'middle'];
        funding_type: 'private';
        grades: ['PK', 'K', '1', '2', '3', '4', '5', '6', '7', '8'];
        id: '0768678341';
        name: 'St. Paul Lutheran School';
        parent_rating: 5;
        rating: any;
        student_count: 124;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.217659;
          lon: -98.213201;
        };
        distance_in_miles: 1.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['middle'];
        funding_type: 'public';
        grades: ['6', '7', '8', '9'];
        id: '0768706511';
        name: 'Cathey Middle School';
        parent_rating: 4;
        rating: 9;
        student_count: 970;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.213007;
          lon: -98.228868;
        };
        distance_in_miles: 1.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['high'];
        funding_type: 'public';
        grades: ['9', '10', '11', '12'];
        id: '0768638161';
        name: 'Lamar Academy';
        parent_rating: 2;
        rating: any;
        student_count: 121;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.234754;
          lon: -98.249669;
        };
        distance_in_miles: 1.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['elementary'];
        funding_type: 'public';
        grades: ['PK', 'K', '1', '2', '3', '4', '5'];
        id: '0768638111';
        name: 'Mcauliffe Elementary School';
        parent_rating: 2;
        rating: 6;
        student_count: 527;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.22039;
          lon: -98.249596;
        };
        distance_in_miles: 1.6;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['middle'];
        funding_type: 'public';
        grades: ['6', '7', '8'];
        id: '0768637911';
        name: 'Lincoln Middle School';
        parent_rating: 3;
        rating: any;
        student_count: 534;
      },
    ];
  };
  schools: {
    __typename: 'SchoolList';
    schools: [
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.238219;
          lon: -98.227573;
        };
        distance_in_miles: 0.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['elementary'];
        funding_type: 'public';
        grades: ['PK', 'K', '1', '2', '3', '4', '5'];
        id: '0768637931';
        name: 'Milam Elementary School';
        parent_rating: any;
        rating: 8;
        student_count: 838;
      },
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.226262;
          lon: -98.238437;
        };
        distance_in_miles: 0.8;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['high'];
        funding_type: 'public';
        grades: ['9', '10', '11', '12'];
        id: '0768637921';
        name: 'Mcallen High School';
        parent_rating: 2;
        rating: 5;
        student_count: 2307;
      },
      {
        __typename: 'School';
        assigned: true;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.269825;
          lon: -98.224518;
        };
        distance_in_miles: 2.6;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211438051';
          name: 'Mcallen Independent School District';
        };
        education_levels: ['middle'];
        funding_type: 'public';
        grades: ['6', '7', '8'];
        id: '0768638101';
        name: 'Morris Middle School';
        parent_rating: 4;
        rating: 9;
        student_count: 906;
      },
      {
        __typename: 'School';
        assigned: any;
        coordinate: {
          __typename: 'Coordinate';
          lat: 26.226369;
          lon: -98.225802;
        };
        distance_in_miles: 0.4;
        district: {
          __typename: 'SchoolDistrict';
          id: '06211428551';
          name: any;
        };
        education_levels: ['elementary'];
        funding_type: 'private';
        grades: ['PK', 'K', '1', '2', '3', '4', '5', '6'];
        id: '0768678701';
        name: 'St Johns Episcopal Day School';
        parent_rating: 5;
        rating: any;
        student_count: 148;
      },
    ];
  };
  products: any;
  list_price: 775;
  list_price_min: any;
  list_price_max: any;
  price_per_sqft: 1;
  community: any;
  lead_attributes: {
    __typename: 'LeadAttributes';
    opcity_lead_attributes: {
      __typename: 'OpCityLeadAttributes';
      flip_the_market_enabled: false;
      cashback_enabled: false;
      phones: any;
      local_phone: any;
    };
    ready_connect_mortgage: {
      __typename: 'ReadyConnectMortgage';
      show_contact_a_lender: false;
      show_veterans_united: false;
    };
    show_contact_an_agent: true;
    lead_type: 'rental_basic_unit';
    show_lead_form: true;
    disclaimer_text: any;
    is_tcpa_message_enabled: any;
    show_text_leads: true;
  };
  flags: {
    __typename: 'HomeFlags';
    is_contingent: any;
    is_garage_present: any;
    is_new_construction: any;
    is_pending: any;
    is_short_sale: any;
    is_foreclosure: any;
    is_senior_community: any;
    is_for_rent: true;
    is_deal_available: any;
    is_price_excludes_land: any;
    is_promotion_present: any;
    is_subdivision: any;
    is_plan: any;
    is_price_reduced: any;
    is_new_listing: true;
    is_coming_soon: any;
  };
  provider_url: {
    __typename: 'HomeProviderUrl';
    href: 'https://www.avail.co/l/60519692';
  };
  source: {
    __typename: 'MlsSource';
    id: 'AVAL';
    disclaimer: any;
    listing_id: '60519692';
    plan_id: any;
    spec_id: any;
    community_id: any;
    name: 'Avail';
    type: 'unit_rental';
    raw: any;
  };
  details: [
    {
      __typename: 'HomeDetails';
      category: 'Bedrooms';
      text: ['Bedrooms: 1'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Other Rooms';
      text: ['Total Rooms: 1'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Bathrooms';
      text: ['Total Bathrooms: 1', 'Full Bathrooms: 1'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Heating and Cooling';
      text: ['Heating Features: electric'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Garage and Parking';
      text: ['Assigned Spaces: yes'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Exterior and Lot Features';
      text: [
        'Balcony',
        'Private Balcony',
        'Balcony: Yes',
        'Private Balcony: Yes',
      ];
    },
    {
      __typename: 'HomeDetails';
      category: 'Amenities and Community Features';
      text: [
        'Pool',
        'Small Dogs Allowed',
        'Cats Allowed',
        'Central Air',
        'Included in Rent: Water, Cable, Internet, WiFi, Washer/Dryer, Storage Unit',
      ];
    },
    {
      __typename: 'HomeDetails';
      category: 'Rental Info';
      text: [
        'Lease Term: 12',
        'Security Deposit: 775',
        'Rent Includes: Broadband Internet, Cable, Hot Water, Water',
        'Application Fee: 55',
      ];
    },
    {
      __typename: 'HomeDetails';
      category: 'Homeowners Association';
      text: ['Cats Allowed: Yes', 'Small Dogs Allowed: Yes'];
    },
    {
      __typename: 'HomeDetails';
      category: 'Other Property Info';
      text: [
        'Availability Date: 2023-06-24',
        'Property Subtype: condo',
        'Source System Name: C2C',
      ];
    },
    {
      __typename: 'HomeDetails';
      category: 'Listing Information';
      text: [
        'Landlord Full Name: West Fern Apartments',
        'Landlord Phone: 9562909801',
      ];
    },
    {
      __typename: 'HomeDetails';
      category: 'Building and Construction';
      text: ['SqFt Minimum: 650'];
    },
  ];
  open_houses: any;
  tax_history: any;
  location: {
    __typename: 'HomeLocation';
    address: {
      __typename: 'HomeAddress';
      line: '1108 Fern Ave W Unit 9';
      street_number: '1108';
      street_name: 'Fern';
      street_suffix: 'Ave';
      unit: 'Unit 9';
      city: 'McAllen';
      state_code: 'TX';
      postal_code: '78501';
      state: 'Texas';
      coordinate: {
        __typename: 'HomeCoordinate';
        lat: 26.232779;
        lon: -98.227089;
      };
    };
    county: {
      __typename: 'HomeCounty';
      fips_code: '48215';
    };
    street_view_url: '';
    neighborhoods: [
      {
        __typename: 'Neighborhood';
        name: 'Broadlawn Terrace';
        city: 'McAllen';
        level: 'residential_neighborhood';
        geo_statistics: {
          __typename: 'GeoStatistics';
          housing_market: {
            __typename: 'HousingMarket';
            median_price_per_sqft: any;
            median_sold_price: any;
            median_listing_price: any;
            median_days_on_market: any;
          };
        };
      },
    ];
  };
  branding: [];
  consumer_advertisers: [
    {
      __typename: 'ConsumerAdvertiser';
      advertiser_id: any;
      office_id: any;
      agent_id: any;
      name: any;
      phone: any;
      type: 'Office';
      href: any;
      slogan: any;
      photo: {
        __typename: 'Photo';
        href: any;
      };
      show_realtor_logo: any;
      hours: any;
    },
  ];
  advertisers: [
    {
      __typename: 'HomeAdvertiser';
      fulfillment_id: any;
      name: any;
      type: 'management';
      team_name: any;
      email: any;
      href: any;
      state_license: any;
      phones: any;
      office: {
        __typename: 'HomeAdvertiserOffice';
        fulfillment_id: any;
        name: any;
        href: any;
        photo: any;
        email: 'listings+60519692@reply.avail.co';
        phones: [
          {
            __typename: 'AdvertiserPhone';
            number: '9562909801';
            type: 'primary';
            ext: any;
          },
        ];
      };
      broker: any;
      photo: any;
    },
    {
      __typename: 'HomeAdvertiser';
      fulfillment_id: any;
      name: any;
      type: 'unit_rental';
      team_name: any;
      email: any;
      href: any;
      state_license: any;
      phones: any;
      office: any;
      broker: any;
      photo: any;
    },
  ];
  photo_count: 14;
  photos: [
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3254976984s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'porch';
          probability: 0.9203906655311584;
        },
        {
          __typename: 'Tag';
          label: 'porch';
          probability: 0.969860851764679;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3890933913s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.9984793066978455;
        },
        {
          __typename: 'Tag';
          label: 'porch';
          probability: 0.9393743276596069;
        },
        {
          __typename: 'Tag';
          label: 'porch';
          probability: 0.9998455047607422;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3387225311s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.6366410851478577;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m532874116s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.9999178647994995;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3813948625s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'kitchen';
          probability: 0.9998811483383179;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1029930990s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'kitchen';
          probability: 0.9944590330123901;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2556263842s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'laundry_room';
          probability: 0.7721894979476929;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m538864993s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'kitchen';
          probability: 0.9999207258224487;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2536260496s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.9999200105667114;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1034144212s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.9996249675750732;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1960073574s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.8311308026313782;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m298796916s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'unknown';
          probability: 0.9971998929977417;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3382159075s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'bathroom';
          probability: 0.9999961853027344;
        },
      ];
    },
    {
      __typename: 'HomePhoto';
      href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m4138336132s.jpg';
      type: 'realtordotcom_mls_listing_image';
      tags: [
        {
          __typename: 'Tag';
          label: 'bathroom';
          probability: 1;
        },
      ];
    },
  ];
  property_history: [
    {
      __typename: 'HomePropertyHistory';
      date: '2023-06-24';
      event_name: 'Listed for rent';
      price: 775;
      source_name: 'Avail';
      listing: {
        __typename: 'HomeListing';
        photos: [
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3254976984s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'porch';
                probability: 0.9203906655311584;
              },
              {
                __typename: 'Tag';
                label: 'porch';
                probability: 0.969860851764679;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3890933913s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.9984793066978455;
              },
              {
                __typename: 'Tag';
                label: 'porch';
                probability: 0.9393743276596069;
              },
              {
                __typename: 'Tag';
                label: 'porch';
                probability: 0.9998455047607422;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3387225311s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.6366410851478577;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m532874116s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.9999178647994995;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3813948625s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'kitchen';
                probability: 0.9998811483383179;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1029930990s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'kitchen';
                probability: 0.9944590330123901;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2556263842s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'laundry_room';
                probability: 0.7721894979476929;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m538864993s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'kitchen';
                probability: 0.9999207258224487;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2536260496s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.9999200105667114;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1034144212s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.9996249675750732;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1960073574s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.8311308026313782;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m298796916s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'unknown';
                probability: 0.9971998929977417;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3382159075s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'bathroom';
                probability: 0.9999961853027344;
              },
            ];
          },
          {
            __typename: 'HomePhoto';
            href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m4138336132s.jpg';
            type: 'realtordotcom_mls_listing_image';
            tags: [
              {
                __typename: 'Tag';
                label: 'bathroom';
                probability: 1;
              },
            ];
          },
        ];
        description: {
          __typename: 'HomeDescription';
          sqft: 650;
        };
      };
    },
  ];
  local: {
    __typename: 'Local';
    noise: {
      __typename: 'Noise';
      score: 74;
      noise_categories: [
        {
          __typename: 'NoiseCategory';
          type: 'airport';
          text: 'Low';
        },
        {
          __typename: 'NoiseCategory';
          type: 'traffic';
          text: 'Medium';
        },
        {
          __typename: 'NoiseCategory';
          type: 'local';
          text: 'Medium';
        },
        {
          __typename: 'NoiseCategory';
          type: 'score';
          text: 'Medium';
        },
      ];
    };
    flood: {
      __typename: 'Flood';
      flood_factor_score: 1;
      fema_zone: ['X (shaded)'];
    };
  };
  last_sold_price: any;
  last_sold_date: any;
  estimates: {
    __typename: 'HomeEstimates';
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
}
