export default interface RentalListing {
  formattedAddress: string;
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  lastSeen: string;
  createdDate: string;
  addressLine2: string;
  county: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  propertyType: string;
  listedDate: string;
  status: string;
  removedDate: string | null;
  daysOnMarket: number;
  yearBuilt: number;
  lotSize: number;
  id: string;
  latitude: number;
  longitude: number;
}
