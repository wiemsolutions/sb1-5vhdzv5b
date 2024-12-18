import { useState } from 'react';
import { createSubscription, SubscriptionData } from '../api/subscriptions';
import { useApi } from './useApi';
import { useAuth } from '../contexts/AuthContext';

export function useSubscription() {
  const [processing, setProcessing] = useState(false);
  const { token } = useAuth();
  const { execute: executeSubscribe } = useApi(createSubscription);

  const subscribe = async (subscriptionData: SubscriptionData) => {
    if (!token) {
      throw new Error('Authentication required');
    }

    try {
      setProcessing(true);
      const result = await executeSubscribe(subscriptionData);
      return result;
    } finally {
      setProcessing(false);
    }
  };

  return {
    subscribe,
    processing,
  };
}