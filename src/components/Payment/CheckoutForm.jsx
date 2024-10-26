import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://pinecone-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 10 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      console.log("stripe or elements not found");
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      console.log("card is nulls");
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          // billing_details: {
          //   email: "anonymous",
          //   name: "anonymous",
          // },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    }
    if (paymentIntent) {
      fetch("https://formspree.io/f/mqakekwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "A person paid $50" }),
      });
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: "Payemnt success!",
          text: `Your payment is success!`,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <p>Card Number</p>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
              border: "red",
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center pt-4">
        <p className="text-red-600 pb-5 text-left">{error}</p>
        <button
          className="btn bg-[#50b948] text-white font-bold uppercase px-16"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
