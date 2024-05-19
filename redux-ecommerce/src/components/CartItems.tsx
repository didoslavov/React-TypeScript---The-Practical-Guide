import { CartItem, addItem, removeItem } from '../store/cart-slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function CartItems() {
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const formattedTotalPrice = totalPrice.toFixed(2);

    const handleAddToCart = (item: CartItem) => dispatch(addItem(item));
    const handleRemoveFromCart = (id: string) => dispatch(removeItem(id));

    return (
        <div id="cart">
            {!cartItems.length ? (
                <p>No items in cart!</p>
            ) : (
                <ul id="cart-items">
                    {cartItems.map((item) => {
                        const formattedPrice = `$${item.price.toFixed(2)}`;

                        return (
                            <li key={item.id}>
                                <div>
                                    <span>{item.title}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleAddToCart(item)}>+</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}

            <p id="cart-total-price">
                Cart Total: <strong>${formattedTotalPrice}</strong>
            </p>
        </div>
    );
}
