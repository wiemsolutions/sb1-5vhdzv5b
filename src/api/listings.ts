import { client } from './client';

export interface ListingData {
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  employees: number;
  established: number;
  monthlyRevenue: number;
  yearlyProfit: number;
  images: string[];
}

export async function getListings(params?: URLSearchParams) {
  const queryString = params ? `?${params.toString()}` : '';
  return client(`/listings${queryString}`);
}

export async function getListing(id: string) {
  return client(`/listings/${id}`);
}

export async function createListing(data: ListingData, token: string) {
  return client('/listings', {
    method: 'POST',
    body: data,
    token,
  });
}

export async function updateListing(id: string, data: Partial<ListingData>, token: string) {
  return client(`/listings/${id}`, {
    method: 'PUT',
    body: data,
    token,
  });
}

export async function deleteListing(id: string, token: string) {
  return client(`/listings/${id}`, {
    method: 'DELETE',
    token,
  });
}