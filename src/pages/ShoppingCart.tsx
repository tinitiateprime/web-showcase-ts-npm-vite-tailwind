import React, { useState } from "react";
import {
  FaTrashAlt,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaTimesCircle,
} from "react-icons/fa";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

const initialCart: CartItem[] = [
  { id: 1, name: "Wireless Headphones", price: 99.99, qty: 1 },
  { id: 2, name: "Bluetooth Speaker", price: 49.99, qty: 2 },
  { id: 3, name: "Smart Watch", price: 149.99, qty: 1 },
];

const PROMO_CODES: { [key: string]: number } = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  FREESHIP: 0,
};

const TAX_RATE = 0.07;

const ShoppingCartAdvanced: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");

  const incrementQty = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setPromoCode("");
    setPromoError("");
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = subtotal * discount;
  const taxAmount = (subtotal - discountAmount) * TAX_RATE;
  const total = subtotal - discountAmount + taxAmount;

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code in PROMO_CODES) {
      setDiscount(PROMO_CODES[code]);
      setPromoError("");
    } else {
      setDiscount(0);
      setPromoError("Invalid promo code.");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Checked out! Total: $${total.toFixed(2)}`);
  };

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center justify-center space-x-3">
          <FaShoppingCart className="text-pink-600" />
          <span>Shopping Cart</span>
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cartItems.map(({ id, name, price, qty }) => (
                <li
                  key={id}
                  className="flex flex-wrap items-center justify-between bg-pink-50 rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <div className="flex-1 min-w-[180px]">
                    <span className="font-semibold text-gray-800">{name}</span>
                    <p className="text-gray-600 text-sm">${price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                    <button
                      onClick={() => decrementQty(id)}
                      className="p-1 rounded-full bg-pink-200 hover:bg-pink-300 transition"
                      aria-label={`Decrease quantity of ${name}`}
                    >
                      <FaMinus className="text-pink-700" />
                    </button>
                    <span className="font-semibold w-6 text-center">{qty}</span>
                    <button
                      onClick={() => incrementQty(id)}
                      className="p-1 rounded-full bg-pink-200 hover:bg-pink-300 transition"
                      aria-label={`Increase quantity of ${name}`}
                    >
                      <FaPlus className="text-pink-700" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(id)}
                    className="text-pink-600 hover:text-pink-800 transition mt-2 sm:mt-0"
                    aria-label={`Remove ${name} from cart`}
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-300 pt-6">
              <div className="flex flex-wrap justify-between gap-4 items-center">
                <div className="flex items-center space-x-3 flex-wrap">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-400 transition w-40"
                  />
                  <button
                    onClick={applyPromo}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-red-600 font-semibold">{promoError}</p>
                )}
                {discount > 0 && (
                  <p className="text-green-600 font-semibold">
                    Promo applied: {discount * 100}% off
                  </p>
                )}
                <button
                  onClick={clearCart}
                  className="text-gray-600 hover:text-gray-800 flex items-center space-x-1 transition mt-2 sm:mt-0"
                  aria-label="Clear cart"
                >
                  <FaTimesCircle />
                  <span>Clear Cart</span>
                </button>
              </div>

              <div className="mt-6 max-w-md ml-auto space-y-2 text-gray-700 font-semibold">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>- ${discountAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (7%):</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl text-gray-900 font-extrabold border-t border-gray-300 pt-3">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                  className={`${
                    cartItems.length === 0
                      ? "bg-pink-300 cursor-not-allowed"
                      : "bg-pink-600 hover:bg-pink-700"
                  } text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition`}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ShoppingCartAdvanced;
