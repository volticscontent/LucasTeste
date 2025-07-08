import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product) =>
        set((state) => {
          const exists = state.cartItems.find((item) => item.id === product.id);
          if (exists) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: (item as any).quantity ? (item as any).quantity + 1 : 2 }
                  : item
              ),
            };
          }
          return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ cartItems: [] }),
      get totalPrice() {
        return get().cartItems.reduce(
          (acc, item) => acc + item.price * ((item as any).quantity || 1),
          0
        );
      },
    }),
    { name: 'cart-storage' }
  )
); 