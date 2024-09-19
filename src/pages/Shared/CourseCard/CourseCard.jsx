import { useContext } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CourseCard = ({ classes }) => {
  const { user, loading} = useContext(AuthContext);
  const {_id, course, img, price, instructorName, seat, studentsEnrolled } =
    classes;
  

//     const handelSelected = ()=>{
//     if(loading){
//       return;
//     }
//     if(user){
//       const selectedCourse = {id:_id, course, email: user?.email, price};
//       console.log(selectedCourse);
//       fetch('https://speak-smile-server.vercel.app/selected', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(selectedCourse),
//       })
//       .then(() => {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'Selected successfully.',
//           showConfirmButton: false,
//           timer: 1500
//       });
//       })
//     }
// }

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure className="h-48">
        <img src={img} alt="Shoes"/>
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-blue-500">Learn {course}</h2>
        <h3 className="text-2xl">{instructorName}</h3>
        <div className="flex justify-between text-xl">
          <p>Available Seat: {seat}</p>
          <p className="flex justify-end items-center"><span className="inline-block"><IoPeopleOutline></IoPeopleOutline> </span>  {studentsEnrolled}</p>
        </div>
        <hr />
        <div className="card-actions justify-between items-center">
          <p className="text-2xl text-blue-500">${price}</p>
          {/* { seat != 0 &&  <button onClick={handelSelected} className="btn text-white bg-blue-500">Selected Now</button>} */}
          { seat != 0 && <Link to={`/dashboard/payment/${_id}`}><button className="btn text-white bg-blue-500">Enroll Now</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
