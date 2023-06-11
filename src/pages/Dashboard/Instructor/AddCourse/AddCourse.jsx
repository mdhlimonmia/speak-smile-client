import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Post course successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset();
      });
  };
  return (
    <div className="w-full px-10">
      <h1 className="text-3xl text-center text-blue-500 font-bold p-5">
        Add Your New Course
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Courses Name*</span>
          </label>
          <input
            type="text"
            placeholder="Course Name"
            {...register("course", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Image Url*</span>
          </label>
          <input
            type="text"
            placeholder="Image Url"
            {...register("img", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            readOnly
            value={user?.displayName}
            {...register("instructorName", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="Email"
            readOnly
            value={user?.email}
            {...register("instructorEmail", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex justify-between gap-20">
          <div className="form-control w-1/2 mb-4">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="number"
              placeholder="Available seats"
              {...register("seat", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-1/2 mb-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />

            <input
              type="text"
              value="pending"
              {...register("status", { required: true })}
              className="input input-bordered w-full hidden "
            />
            <input
              type="number"
              value="0"
              {...register("studentsEnrolled", { required: true })}
              className="input input-bordered w-full hidden "
            />

          </div>
        </div>
        <input
          className="btn btn-sm bg-blue-500  mt-4"
          type="submit"
          value="Add Course"
        />
      </form>
    </div>
  );
};

export default AddCourse;
