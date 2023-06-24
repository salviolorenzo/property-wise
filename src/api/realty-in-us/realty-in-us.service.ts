import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';
import { PropertyType, TransportationType } from './types';
import { camelToSnakeCase } from 'src/lib/utils/string.util';
import { CamelCasedPropertiesDeep } from 'type-fest';
import {
  Listing,
  ListingSearchResponse,
  ListingSearchResults,
} from './interfaces/listing-response';
import { recursiveToCamel } from 'src/lib/utils/object.util';

@Injectable()
export class RealtyInUSService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  private baseUrl = this.configService.get<string>('realtyInUs.baseUrl');
  private apiKey = this.configService.get<string>('realtyInUs.apiKey');
  private defaultSort = {
    direction: 'desc',
    field: 'list_date',
  };

  getRequestConfig(
    method: string,
    endpoint: string,
    params: any = {},
    data: any = {},
    headers: any = {},
  ): AxiosRequestConfig {
    const options: {
      method: string;
      url: string;
      headers: object;
      params?: object;
      data?: object;
    } = {
      method: method,
      url: `${this.baseUrl}/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
        ...headers,
      },
      params,
      data,
    };

    return options;
  }

  async getPropertiesByType(
    body,
    type: PropertyType,
  ): Promise<CamelCasedPropertiesDeep<Listing[]>> {
    const endpoint = 'properties/v3/list';
    const headers = { 'content-type': 'application/json' };

    const requestData = {
      ...body,
      status: [type],
      sort: this.defaultSort,
    };

    const requestConfig = this.getRequestConfig(
      'POST',
      endpoint,
      {},
      requestData,
      headers,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(
        response.data.home_search.results,
      ) as CamelCasedPropertiesDeep<Listing>[];
    } catch (error) {
      console.error(error);
    }
  }

  async getSimilarHomes(
    propertyId: string,
    propertyType: PropertyType,
    limit = 10,
  ): Promise<CamelCasedPropertiesDeep<Listing[]>> {
    const endpoint = '/properties/v3/list-similar-homes';
    const params = {
      property_id: propertyId,
      status: propertyType,
      limit,
    };

    const requestConfig = this.getRequestConfig('GET', endpoint, params);

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(
        response.data.home_search.results,
      ) as CamelCasedPropertiesDeep<Listing>[];
    } catch (error) {
      console.error(error);
    }
  }

  async getPropertyDetails(propertyId: string, listingId?: string) {
    const endpoint = 'properties/v3/detail';
    const params = { property_id: propertyId, listing_id: listingId };

    const requestConfig = this.getRequestConfig('GET', endpoint, params);

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(response.data.home);
    } catch (error) {
      console.error(error);
    }
  }

  async getPropertyImages(propertyId: string) {
    const endpoint = 'properties/v3/get-photos';
    const params = { property_id: propertyId };

    const requestConfig = this.getRequestConfig('GET', endpoint, params);

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(response.data.home_search);
    } catch (error) {
      console.error(error);
    }
  }

  async getTimeToDestination(params: {
    destinationAddress: string;
    propertyId: string;
    transportationType?: TransportationType;
    withTraffic?: boolean;
  }) {
    const endpoint = 'properties/v3/get-commute-time';

    const formattedParams = {};
    Object.keys(params).forEach((key) => {
      formattedParams[camelToSnakeCase(key)] = params[key];
    });

    const requestConfig = this.getRequestConfig('GET', endpoint, params);

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(response.data.home);
    } catch (error) {
      console.error(error);
    }
  }

  async getSurroundingInfo(propertyId: string) {
    const endpoint = 'properties/v3/get-surroundings';
    const params = { property_id: propertyId };

    const requestConfig = this.getRequestConfig('GET', endpoint, params);

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return recursiveToCamel(response.data.home);
    } catch (error) {
      console.error(error);
    }
  }
}
