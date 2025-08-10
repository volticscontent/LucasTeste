import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

export const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-06-30.basil',
});

export const getStripeJs = async () => {
  return await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
}; 