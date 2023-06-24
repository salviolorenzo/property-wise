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
    const forSaleListing = await this.realtyInUsService.getPropertiesByType(
      {
        postal_code: zip,
      },
      'for_sale',
    );

    const listingsInBudget = forSaleListing.filter(
      (listing) => listing.listPrice <= maxBudget,
    );

    const output = [];
    const outliers = [];

    for (const listing of listingsInBudget) {
      const { averageRent, comps } = await this.getRentalData(listing);

      const monthlyPaymentData = getMonthlyPaymentData(
        listing.listPrice,
        listing.listPrice * downPaymentPercentage,
      );

      const listingData = {
        listing,
        rentalMarketData: { averageRent, comps },
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
      propertyId,
      description: { beds, baths, sqft },
    } = listingToCompare;

    const rentalListingsInTheArea =
      await this.realtyInUsService.getSimilarHomes(propertyId, 'for_rent', 100);

    const filteredForRentListings = rentalListingsInTheArea
      .filter(
        (listing) =>
          listing.description.beds === beds &&
          listing.description.baths === baths &&
          listing.description.sqft <= sqft + 300,
      )
      .map((listing) => {
        const {
          description: { beds, baths, sqft },
          listPrice,
        } = listing;
        return { beds, baths, sqft, listPrice };
      });

    const averageRent = getAveragePrice(filteredForRentListings);
    return {
      averageRent,

      comps: filteredForRentListings,
    };
  }
}
