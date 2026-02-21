import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-01-28.clover',
  typescript: true,
});

// Price IDs for each plan — set STRIPE_PRO_PRICE_ID in your .env file
export const STRIPE_PLANS = {
  basic: {
    priceId: null,
    name: 'Basic Plan',
    amount: 0,
  },
  pro: {
    priceId: process.env.STRIPE_PRO_PRICE_ID ?? null,
    name: 'Pro Plan',
    amount: 999,
  },
  enterprise: {
    priceId: null,
    name: 'Enterprise Plan',
    amount: 0,
  },
};
