

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
        updateCartCount(storedCart);
    }, []);

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const existingItem = updatedCart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCartCount(updatedCart);
        alert("added to your bucket 🪣")
    };

    const updateQuantity = (id, newQuantity) => {
        let updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCartCount(updatedCart);
    };

    // ✅ **Remove Product from Cart**
    const removeFromCart = (id) => {
        if (confirm("do you want to remove item from your bucket")) {
            let updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            updateCartCount(updatedCart);
        }
    };

    const updateCartCount = (cartItems) => {
        const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalCount);
    };

    return (
        <CartContext.Provider value={{ cart, cartCount, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

};
export const useCart = () => {
    return useContext(CartContext);
};

