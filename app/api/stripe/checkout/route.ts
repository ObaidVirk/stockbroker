import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    const { plan } = await request.json();

    if (!plan || !['basic', 'pro', 'enterprise'].includes(plan)) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    // For Basic plan (free), redirect home (or login if not authenticated)
    if (plan === 'basic') {
      return NextResponse.json({
        url: session ? '/' : '/login',
      });
    }

    // For Enterprise plan, redirect to contact
    if (plan === 'enterprise') {
      return NextResponse.json({
        url: '/contact',
      });
    }

    // For Pro plan, create Stripe checkout session
    const planConfig = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS];

    if (!planConfig.priceId) {
      return NextResponse.json({ error: 'Price not configured for this plan' }, { status: 500 });
    }
    
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: planConfig.priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing?canceled=true`,
      customer_email: session?.email,
      metadata: {
        userId: session?.id?.toString() || 'guest',
        plan: plan,
      },
      subscription_data: {
        metadata: {
          userId: session?.id?.toString() || 'guest',
          plan: plan,
        },
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
