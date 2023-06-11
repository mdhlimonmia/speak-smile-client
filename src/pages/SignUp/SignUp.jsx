import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
  const [data, setData] = useState([]);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const { createUser} = useContext(AuthContext);
  const onSubmit = (data) =>{
    setData(data);
    createUser(data.email, data.password)
    .then(result => {
     const newUser = result.user;
     console.log(newUser);
  })
    
  }
  
  return (
    <>
      <Helmet>
        <title>SpSmile | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUP Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <option value="A">Male</option>
                <option value="B">Female</option>
              </select>
              {errors.gender && (
                <span className="text-red-400">
                  Please select your gender!!!
                </span>
              )}
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
                {errors.confirmPassword &&  (
                  <span className="text-red-400">
                    Please retype your password!!!
                  </span>
                ) ||
                data?.password != data?.confirmPassword &&  (
                  <span className="text-red-400">
                    Confirm password no match!!!
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
