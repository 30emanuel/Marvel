import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
})

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addItem = (item) => {
        setItems([...items, item])
        console.log(items)
    }

    const removeItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider