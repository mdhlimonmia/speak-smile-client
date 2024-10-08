import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setData(data);
    const newUser = {
      name: data.name,
      img: data.photoUrl,
      email: data.email,
      gender: data.gender,
      status: "student",
    };
    console.log(newUser);
    // update user (firebase)
    createUser(data.email, data.password).then(() => {
      updateUser(data.name, data.photoUrl).then(() => {
        // console.log("user profile updated");

        //send user information database(mongoDB)
        fetch("https://speak-smile-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(() => {
            // console.log(data);
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
      })
        .catch(() => {
          // console.log(error);
        })

    });
  };

  return (
    <>
      <Helmet>
        <title>SpSmile | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="card flex-shrink-0 w-full  shadow-xl bg-base-100">
            <h1 className="text-center text-5xl font-bold text-blue-400 ">SignUP Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body text-white">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-400">
                      Please enter your name!!!
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-400">
                      Please enter your email!!!
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    type="text"
                    placeholder="photoUrl"
                    className="input input-bordered"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-400">
                      Please enter photo url!!!
                    </span>
                  )}
                </div>
                <div className="from-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    className="input input-bordered"
                    {...register("gender", { required: true })}
                  >
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-400">
                      Please select your gender!!!
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-400">
                    Please enter a password!!!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {(errors.confirmPassword && (
                  <span className="text-red-400">
                    Please retype your password!!!
                  </span>
                )) ||
                  (data?.password != data?.confirmPassword && (
                    <span className="text-red-400">
                      Confirm password no match!!!
                    </span>
                  ))}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-2xl bg-blue-400">SignUp</button>
              </div>
              <p>
                <small>
                  Already have a account?{"     "}
                  <Link to="/login" className="text-blue-400">
                      Login
                  </Link>{" "}
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
