import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RealtyMoleService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private baseUrl = this.configService.get<string>('realtyMole.baseUrl');
  private apiKey = this.configService.get<string>('realtyMole.apiKey');

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
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com',
        ...headers,
      },
      params,
      data,
    };

    return options;
  }

  // rentals
  async getRentalListings(params) {
    const endpoint = 'rentalListings';
    const requestConfig = this.getRequestConfig('GET', endpoint, {
      limit: 100,
      ...params,
    });

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getRentalListingById() {
    // TODO
  }

  async getRentalMarketData(zip: string) {
    const endpoint = `/zipCodes/${zip}`;
    const requestConfig = this.getRequestConfig('GET', endpoint);

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // sales
  async getSaleListings(params): Promise<any[]> {
    const endpoint = 'saleListings';
    const requestConfig = this.getRequestConfig('GET', endpoint, {
      limit: 100,
      ...params,
    });

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/${endpoint}`, requestConfig),
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getSaleListingById() {
    // TODO
  }

  // propertyRecords
  async searchPropertyRecords() {
    // TODO
  }

  async getPropertyRecordById() {
    // TODO
  }

  async getPropertyValuation() {
    // TODO
  }

  async getPropertyRentEstimate(params) {
    // TODO
  }
}
