import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.email && data.firstName) {
      Swal.fire({
        title: "Signup Success!",
        text: "Your account has been created successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("address");
    }
  };
  return (
    <>
      {" "}
      <div className="signup-cover h-screen lg:py-9 p-4">
        <Header />
        <div className="flex items-center lg:justify-end justify-center">
          <div className="lg:mr-[200px] lg:mt-0 mt-5">
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
            <div className="bg-white p-5 rounded-lg mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Email</span>
                  </div>
                  <input
                    {...register("email")}
                    required
                    type="email"
                    placeholder="example@email.com"
                    className="input input-md input-bordered w-full py-2"
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="form-control w-full">
                    <div className="label ">
                      <span className="label-text font-semibold">
                        First Name
                      </span>
                    </div>
                    <input
                      {...register("firstName")}
                      required
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        Last Name
                      </span>
                    </div>
                    <input
                      {...register("lastName")}
                      required
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">DOB</span>
                    </div>
                    <input
                      {...register("DOB")}
                      required
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">Gender</span>
                    </div>
                    <select
                      className="select select-bordered w-full"
                      {...register("gender")}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="nonBinary">Non Binary</option>
                      <option value="noTSay">Prefer to self describe</option>
                    </select>
                  </label>
                </div>
                <div className="flex form-control mt-3">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-accent"
                    />
                    <span className="label-text">
                      I Agree to both the{" "}
                      <Link className="text-blue-500 font-semibold" to="/">
                        Membership Agreement{" "}
                      </Link>
                      and{" "}
                      <Link className="text-blue-500 font-semibold" to="/">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
                <div className="text-center pt-3">
                  <button className="btn lg:btn-lg bg-[#50b948] text-white font-bold uppercase lg:px-20">
                    Sign up now
                  </button>
                </div>
              </form>
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

export default Signup;
