import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  getAveragePrice,
  getMonthlyPaymentData,
} from 'src/lib/utils/math.util';
import { RealtyMoleService } from 'src/api/realty-mole/realty-mole.service';
import { RealtyInUSService } from 'src/api/realty-in-us/realty-in-us.service';

@Injectable()
export class SearchService {
  constructor(
    private configService: ConfigService,
    private realtyMoleService: RealtyMoleService,
    private realtyInUsService: RealtyInUSService,
  ) {}

  async findPropertiesByZip(
    zip: string,
    maxBudget = Infinity,
    downPaymentPercentage = 0.05,
  ) {
    const forSaleListings = await this.realtyInUsService.getPropertiesByType(
      {
        postal_code: zip,
      },
      'for_sale',
    );

    const listingsInBudget = forSaleListings.filter(
      (listing) => listing.price <= maxBudget,
    );

    const output = [];
    const outliers = [];

    for (const listing of listingsInBudget) {
      const { averageRent, rentEstimate, marketData, comps } =
        await this.getRentalData(listing);

      const monthlyPaymentData = getMonthlyPaymentData(
        listing.price,
        listing.price * downPaymentPercentage,
      );

      const listingData = {
        listing,
        rentalMarketData: { averageRent, rentEstimate, marketData, comps },
        monthlyPaymentData,
      };

      const { monthlyPayment } = monthlyPaymentData;

      if (averageRent >= monthlyPayment + 400) {
        outliers.push(listingData);
      } else if (monthlyPayment <= averageRent) {
        output.push(listingData);
      }
    }

    return output;
  }

  async getRentalData(listingToCompare) {
    const {
      formattedAddress,
      propertyType,
      zipCode,
      bedrooms,
      bathrooms,
      squareFootage,
    } = listingToCompare;

    const rentalListingsInTheArea =
      await this.realtyInUsService.getPropertiesByType({ zipCode }, 'for_rent');

    const filteredForRentListings = rentalListingsInTheArea
      .filter(
        (listing) =>
          listing.bedrooms === bedrooms &&
          listing.bathrooms === bathrooms &&
          listing.squareFootage <= squareFootage + 300,
      )
      .map((listing) => {
        const { bedrooms, bathrooms, squareFootage, price } = listing;
        return { bedrooms, bathrooms, squareFootage, price };
      });

    const averageRent = getAveragePrice(filteredForRentListings);
    return {
      averageRent,

      comps: filteredForRentListings,
    };
  }
}
