import React, { useState } from 'react';
import type { NextPage } from 'next';
import CartItem from '../components/CartItem';
import { useCart } from '../lib/useCart';
import Seo from '../components/Seo';
import ButtonPrimary from '../components/ButtonPrimary';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const CheckoutPage: NextPage = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const [finished, setFinished] = useState(false);

  const handleFinish = async () => {
    if (isEmpty) return;
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erro ao redirecionar para o pagamento.');
      }
    } catch (err) {
      alert('Erro ao processar o pagamento.');
    }
  };

  const isEmpty = cartItems.length === 0;

  return (
    <>
      <Seo
        title="Finalizar Compra"
        description="Revise seus itens antes de finalizar a compra na Power House Brasil."
      />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Itens do carrinho */}
        <div>
          <h1 className="text-2xl font-bold text-primary mb-6">Seu Carrinho</h1>
          <div className="bg-white rounded-md shadow divide-y">
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center py-16">
                <ShoppingCart className="w-16 h-16 text-neutral-300 mb-4" aria-label="Carrinho vazio" />
                <span className="text-neutral-500 mb-6">Seu carrinho está vazio.</span>
                <Link href="/shop">
                  <ButtonPrimary aria-label="Voltar para a loja">← Voltar para a Loja</ButtonPrimary>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.id} product={item} onRemove={removeFromCart} />
              ))
            )}
          </div>
        </div>
        {/* Resumo do pedido */}
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="bg-white rounded-md shadow p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2 text-primary">Resumo do Pedido</h2>
            <div className="flex items-center justify-between">
              <span className="text-lg">Total:</span>
              <span className="text-xl text-accent font-bold">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <ButtonPrimary
              className="mt-6 w-full text-lg py-4"
              onClick={handleFinish}
              aria-label="Finalizar Compra"
              tabIndex={0}
              disabled={isEmpty}
            >
              Finalizar Compra
            </ButtonPrimary>
            {finished && (
              <div className="text-green-600 font-semibold text-center mt-4 transition-all">Compra finalizada com sucesso!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
