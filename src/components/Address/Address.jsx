import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Address = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.address && data.city && data.state && data.zip) {
      Swal.fire({
        title: "Address Added!",
        text: "Your address stored successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/payment");
  };
  return (
    <div>
      <div className="signup-cover h-screen lg:py-9 py-4">
        <Header />
        <div className="flex items-center lg:justify-end justify-center lg:py-0 lg:py-16 py-6">
          <div>
            <div className="lg:mr-[200px] lg:mt-0 mt-5 px-4">
              <div className="text-white">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Your Opinion Matters!
                </h2>
                <p>
                  Join the Pinecone Research Panel and be one of the first to
                  test <br />
                  emerging concepts for a variety of products. <br /> Each
                  product survey pays $1.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        Address and Unit Number{" "}
                        <span className="text-red-600">*</span>
                      </span>
                    </div>
                    <input
                      {...register("address")}
                      required
                      type="text"
                      placeholder=""
                      className="input input-md input-bordered w-full py-2"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label ">
                      <span className="label-text font-semibold">
                        City <span className="text-red-600">*</span>
                      </span>
                    </div>
                    <input
                      {...register("city")}
                      required
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text font-semibold">
                          State <span className="text-red-600">*</span>
                        </span>
                      </div>
                      <input
                        {...register("state")}
                        required
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text font-semibold">
                          Zip <span className="text-red-600">*</span>
                        </span>
                      </div>
                      <input
                        {...register("zip")}
                        required
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="text-center pt-3">
                    <button className="btn lg:btn-lg bg-[#50b948] text-white font-bold uppercase lg:min-w-[200px]">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Address;
