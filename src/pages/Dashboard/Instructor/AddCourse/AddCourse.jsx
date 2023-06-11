import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="w-full px-10">
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
            placeholder={user?.displayName}
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
            placeholder={user?.email}
            {...register("email", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex justify-between gap-20">
          <div className="form-control w-1/2 mb-4">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="text"
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
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
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
