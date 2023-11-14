export default function CheckoutForm({ user, cart }) {
    return (
        <form className='checkoutForm'>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
            <label htmlFor="address">Address: </label>
            <input type="text" name="address" id="address" />
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" />
            <label htmlFor="creditcard">Credit Card: </label>
            <input type="text" name="creditcard" id="creditcard" />
            <label htmlFor="expdate">Expiration Date: </label>
            <input type="text" name="expdate" id="expdate" />
            <label htmlFor="cvv">CVV: </label>
            <input type="text" name="cvv" id="cvv" />
            <button type="submit">Submit</button>
        </form>
    )
}