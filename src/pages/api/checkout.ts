import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { items } = req.body;
    
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Itens inválidos' });
    }

    // Configuração do Mercado Pago
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
    
    if (!accessToken) {
      return res.status(500).json({ error: 'Token do Mercado Pago não configurado' });
    }

    // Calcula o total
    const totalAmount = items.reduce((total: number, item: any) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);

    // Cria os items no formato do Mercado Pago
    const mercadoPagoItems = items.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description || item.title,
      picture_url: item.image,
      category_id: item.category || 'sports',
      quantity: item.quantity || 1,
      currency_id: 'BRL',
      unit_price: parseFloat(item.price.toFixed(2))
    }));

    // Cria a preferência de pagamento
    const preference = {
      items: mercadoPagoItems,
      back_urls: {
        success: `${req.headers.origin}/checkout/success`,
        failure: `${req.headers.origin}/checkout/failure`,
        pending: `${req.headers.origin}/checkout/pending`
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 12
      },
      shipments: {
        cost: 0,
        mode: 'not_specified'
      },
      payer: {
        name: 'Cliente',
        email: 'cliente@powerhouse.com.br'
      },
      external_reference: `order_${Date.now()}`,
      statement_descriptor: 'POWERHOUSE BRASIL',
      binary_mode: false,
      expires: false
    };

    // Faz a requisição para o Mercado Pago
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(preference)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro do Mercado Pago:', errorData);
      return res.status(500).json({ error: 'Erro ao criar preferência de pagamento' });
    }

    const data = await response.json();
    
    return res.status(200).json({ 
      url: data.init_point, // URL para redirecionar o usuário
      id: data.id
    });

  } catch (error: any) {
    console.error('Erro no checkout:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 