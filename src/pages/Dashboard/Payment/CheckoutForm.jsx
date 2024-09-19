import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ course, money }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://speak-smile-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: money }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [money]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log('card', card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("paymentMethod", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    // console.log(paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      //save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: money,
        course: course.course,
        courseId: course._id,
      };
      // console.log(payment);
      fetch("https://speak-smile-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      //update seat and student number
      const seat = { seat: parseInt(course.seat) - 1 };
      fetch(`https://speak-smile-server.vercel.app/courses/${course._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(seat),
      })
        .then()
        .catch();

      const studentsEnrolled = {
        studentsEnrolled: parseInt(course.studentsEnrolled) + 1,
      };
      // console.log(studentsEnrolled);
      fetch(`https://speak-smile-server.vercel.app/courses/${course._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(studentsEnrolled),
      })
        .then()
        .catch();
        
      // // update user student number
      // fetch(`https://speak-smile-server.vercel.app/users/${user._id}`, {
      //   method: "PATCH",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(status),
      // });
    }
  };

  return (
    <>
      <form className="w-full m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary bg-blue-500 btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
