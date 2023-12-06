import './CheckoutForm.scss';
import { CreditCardInput, SquarePaymentsForm } from 'react-square-web-payments-sdk';

export default function CheckoutForm({ user, cart }) {
    return (
        <div className='checkoutForm'>
            <h2>CUSTOMER INFORMATION</h2>
            <form className='customerInfo'>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" />
                <label htmlFor="phone">Phone: </label>
                <input type="text" name="phone" id="phone" />
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />
            </form>
            <h2>PAYMENT INFORMATION</h2>
            {/* <form className='paymentInfo'>
                <label htmlFor="creditcard">Credit Card: </label>
                <input type="text" name="creditcard" id="creditcard" />
                <label htmlFor="expdate">Expiration Date: </label>
                <input type="text" name="expdate" id="expdate" />
                <label htmlFor="cvv">CVV: </label>
                <input type="text" name="cvv" id="cvv" />
            </form> */}
            <SquarePaymentsForm
                applicationId={process.env.SQUARE_APP_ID}
                locationId={process.env.SQUARE_LOCATION_ID}
                cardTokenizeResponseReceived={ async (token, buyer) => {
                    {/* /* alert(`Token received! \n${JSON.stringify(token)}\n${JSON.stringify(buyer)}` */ }
                    alert(`Token received! \n${JSON.stringify(token, null , 2)}`);
                }}
            >
                <CreditCardInput />
            </SquarePaymentsForm>
            <button type="submit">Submit</button>
        </div>
    )
}