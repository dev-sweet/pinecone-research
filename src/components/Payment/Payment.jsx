import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key);
  return (
    <>
      <div className="signup-cover h-screen lg:py-8 py-4">
        <Header />
        <div className="flex items-center lg:justify-end justify-center lg:pt-0 pt-20">
          <div className="max-w-[450px] lg:mr-[200px] lg:mt-0 mt-5">
            <div className="text-white">
              <h2 className="lg:text-3xl text-xl font-bold">
                Your Opinion Matters!
              </h2>
              <p>
                Join the Pinecone Research Panel and be one of the first to test{" "}
                <br />
                emerging concepts for a variety of products. <br /> Each product
                survey pays $1.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg mt-5">
              <h2 className="text-2xl mb-5">Pay with card</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0">
        <Footer />
      </div>
    </>
  );
};

export default Payment;
{
  /* <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Credit Card Number for Monthly Payment{" "}
                      <span className="text-red-600">*</span>
                    </span>
                  </div>
                  <input
                    {...register("cardNumber")}
                    required
                    type="text"
                    placeholder=""
                    className="input input-md input-bordered w-full py-2"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label ">
                    <span className="label-text font-semibold">
                      Security Code <span className="text-red-600">*</span>
                    </span>
                  </div>
                  <input
                    {...register("code")}
                    required
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full"
                  />
                </label>
                <div className="label">
                  <span className="label-text font-semibold">
                    Expiration Date <span className="text-red-600">*</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <label className="form-control w-full">
                    <select
                      className="select select-bordered w-full"
                      {...register("month")}
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </label>
                  <label className="form-control w-full">
                    <select
                      className="select select-bordered w-full"
                      {...register("year")}
                    >
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                      <option value="2033">2033</option>
                      <option value="2034">2034</option>
                      <option value="2035">2035</option>
                      <option value="2036">2036</option>
                      <option value="2037">2037</option>
                      <option value="2039">2039</option>
                      <option value="2040">2040</option>
                      <option value="2041">2041</option>
                      <option value="2042">2042</option>
                      <option value="2043">2043</option>
                    </select>
                  </label>
                </div>
                <div className="text-center pt-5">
                  <button className="btn btn-lg bg-[#50b948] text-white font-bold uppercase px-20">
                    Payment
                  </button>
                </div>
              </form> */
}
