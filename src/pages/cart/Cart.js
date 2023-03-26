import React, { useState, useContext } from "react";
import { CartContext } from "../../cartContext";
import "./CartCss.css";

function Cart() {
    const { items, removeItem } = useContext(CartContext)

    const [cartItems, setCartItems] = useState(items)

    const handleRemoveItem = (id) => {
        removeItem(id)
        setCartItems(items)
    }

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.prices[0].price,
        0
    )

    return (
        <div class="cart-container">
            <h1>Carrinho</h1>

            <div class="cart-items">
                {cartItems.map((item) => (
                <div class="cart-item" key={item.id}>
                    <img src={`${item.thumbnail.path}.jpg`} alt={item.title} />

                    <div class="cart-item-details">
                        <h2>{item.title}</h2>
                        <p>{item.prices[0].price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                    </div>
                </div>
                ))}

                {!cartItems.length && <p class="cart-empty">Seu carrinho está vazio!</p>}

                {!!cartItems.length && (
                    <div class="cart-summary">
                        <h3>Total: {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
                        <button>Finalizar compra</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
