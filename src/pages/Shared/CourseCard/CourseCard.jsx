import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourseCard = ({ classes }) => {
  const { course, img, price, instructorName, seat, studentsEnrolled } =
    classes;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
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
          { seat != 0 && <Link to='/dashboard/payment'><button className="btn text-white bg-blue-500">Enroll Now</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
