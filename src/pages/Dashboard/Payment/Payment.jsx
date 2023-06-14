import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const course = useLoaderData()
    const taka = parseInt(course.price);
    // console.log(taka);
    // const money = 200;
    // const price = parseFloat(money.toFixed(2))
    return (
        
        <div>
            <h2 className="text-3xl"> Pay Course Fee </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm money = {taka}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;