import type { NextApiRequest, NextApiResponse } from 'next';
import { stripeServer } from '../../lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Itens inválidos' });
    }
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));
    const session = await stripeServer.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${req.headers.origin}/checkout?success=1`,
      cancel_url: `${req.headers.origin}/checkout?canceled=1`,
    });
    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
} 