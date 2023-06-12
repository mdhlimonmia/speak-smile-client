import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        // console.log(result);
        navigate(from, { replace: true });
      })
      .catch(() => {
        // console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result);
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        const newUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          img: loggedInUser.photoURL,
          status: "student",
        };

        fetch("https://speak-smile-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then(() => {
          // console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        // console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>SpSmile | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-400">
                    Please enter your email!!!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-400">
                    Please enter your password!!!
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                <small>
                  New Here?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Create an account
                  </Link>{" "}
                </small>
              </p>
              <div className="divider">Or Login with</div>
              <div className="flex text-3xl justify-center gap-5">
                <FcGoogle onClick={handleGoogleSignIn}></FcGoogle>
                <BsGithub></BsGithub>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
