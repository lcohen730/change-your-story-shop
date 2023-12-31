import './CheckoutForm.scss';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function CheckoutForm({ user, cart }) {
    const squareAppId = "sandbox-sq0idb-Wuvh3bGjWtnOFEmO9kh3kA";
    const squareLocationId = "LAJ3KW8FM6EX7";

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
            <PaymentForm
                applicationId={squareAppId}
                locationId={squareLocationId}
                cardTokenizeResponseReceived={async (token, buyer) => {
                    const response = await fetch("../api/pay.mjs", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            sourceId: token.token,
                        }),
                    });
                    console.log(await response.json());
                    /* alert(`Token received! \n${JSON.stringify(token)}\n${JSON.stringify(buyer)}`); */
                    /* alert(`Token received! \n${JSON.stringify(token, null , 2)}`); */
                }}
            >
                <CreditCard />
            </PaymentForm>
            {/* <button type="submit">Submit</button> */}
        </div>
    )
}