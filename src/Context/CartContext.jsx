import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = useCallback((item, cantidad) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, cantidad: cartItem.cantidad + cantidad }
            : cartItem
        );
      }
      return [...prev, { ...item, cantidad }];
    });
  }, []);

  const removeItem = useCallback((itemId) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== itemId));
  }, []);

  const clear = useCallback(() => setCart([]), []);

  const isInCart = useCallback(
    (id) => cart.some((cartItem) => cartItem.id === id),
    [cart]
  );

  const value = useMemo(
    () => ({ cart, addItem, removeItem, clear, isInCart }),
    [cart, addItem, removeItem, clear, isInCart]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartContext;
