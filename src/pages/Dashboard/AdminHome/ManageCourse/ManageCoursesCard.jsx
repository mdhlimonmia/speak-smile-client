import Swal from "sweetalert2";

const ManageCoursesCard = ({ classes }) => {
  const {
    course,
    img,
    price,
    instructorName,
    instructorEmail,
    seat,
    studentsEnrolled,
    status,
  } = classes;

  const handleChangeStatus = (classes, status) => {
    fetch(`https://speak-smile-server.vercel.app/courses/${classes._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Courses is an ${status.status} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="hero w-[800px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-2 ml-5">
          <h1 className="text-3xl font-bold">{course}</h1>
          <p>{instructorName}</p>
          <p>{instructorEmail}</p>
          <p>{price}</p>
          <p>{seat}</p>
          <p>{studentsEnrolled}</p>
          <p className="text-yellow-600">{status}</p>
          <button onClick={() => handleChangeStatus(classes, { status: "Approved" })} className="btn btn-primary bg-blue-500 mr-2">Approve</button>
          <button onClick={() => handleChangeStatus(classes, { status: "Deny" })} className="btn btn-primary bg-blue-500 mr-2">Deny</button>
          <button className="btn btn-primary bg-blue-500 mr-2">feedback</button>
        </div>
      </div>
    </div>
  );
};

export default ManageCoursesCard;
