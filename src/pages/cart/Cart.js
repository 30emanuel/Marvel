import React, { useState, useContext } from "react";
import { CartContext } from "../../cartContext";
import "./CartCss.css";

function Cart() {
    const { items, removeItem } = useContext(CartContext)
    const [cartItems, setCartItems] = useState(items)
    const [coupon, setCoupon] = useState("")
    const [discount, setDiscount] = useState(0)
    const coupons = [
        { code: "50OFF", discount: 50, valid: "2023-12-31" },
        { code: "10OFF", discount: 10, valid: "2023-05-25" },
        { code: "20EXPIRADO", discount: 20, valid: "2023-03-25" },
    ]

    const handleRemoveItem = (id) => {
        removeItem(id)
        setCartItems(items)
    }

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce(
          (total, item) => total + item.prices[0].price,
          0
        )
        const discountedPrice = totalPrice * ((100 - discount) / 100);
        return discountedPrice
    }

    const applyCoupon = (event) => {
        event.preventDefault()
        const coupon = event.target.elements.coupon.value
        const foundCoupon = coupons.find(
            (c) => c.code === coupon && new Date(c.valid) > new Date()
        )
    
        if (foundCoupon) {
          setCoupon(foundCoupon.code)
          setDiscount(foundCoupon.discount)
        } else {
          setCoupon("")
          setDiscount(0)
          alert(`${coupon} cupom invalido ou expirado.`)
        }
    }

    return (
        <div className="cart-container">
            <h1>Carrinho</h1>

            <div className="cart-items">
                {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={`${item.thumbnail.path}.jpg`} alt={item.title} />

                    <div className="cart-item-details">
                        <h2>{item.title}</h2>
                        <p>{item.prices[0].price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                    </div>
                </div>
                ))}

                {!cartItems.length && <p>Seu carrinho está vazio!</p>}

                {!!cartItems.length && (
                    <div className="cart-summary">
                        <form className="discount-form" onSubmit={applyCoupon}>
                            <input placeholder="CUPOM" name="coupon" />
                            <button type="submit">Aplicar</button>
                        </form>
                        {!!discount && (
                            <p>Desconto aplicado: {discount}% ({coupon})</p>
                        )}
                        <h3>Total: {calculateTotalPrice().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
                        <button>Finalizar compra</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
