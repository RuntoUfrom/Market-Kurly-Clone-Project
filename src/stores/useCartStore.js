import { create } from "zustand";

const CartStore = (set) => ({
  cartItems: [],

  addToCart: (product) => {
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.productId === product.productId,
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + product.quantity }
              : item,
          ),
        };
      }
      return { cartItems: [...state.cartItems, product] };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.productId !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.productId === id ? { ...item, quantity } : item,
      ),
    }));
  },

  clearCart: () => set({ cartItems: [] }),
});

const useCartStore = create(CartStore);
export default useCartStore;
