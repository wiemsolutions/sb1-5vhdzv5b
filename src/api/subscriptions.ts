import { client } from './client';

export interface SubscriptionData {
  type: 'BASIC' | 'FEATURED' | 'PREMIUM';
  price: number;
}

export async function getSubscriptions(token: string) {
  return client('/subscriptions', {
    token,
  });
}

export async function createSubscription(data: SubscriptionData, token: string) {
  return client('/subscriptions', {
    method: 'POST',
    body: data,
    token,
  });
}

export async function cancelSubscription(id: string, token: string) {
  return client(`/subscriptions/${id}`, {
    method: 'DELETE',
    token,
  });
}