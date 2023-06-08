import { IoPeopleOutline } from "react-icons/io5";

const CourseCard = ({ classes }) => {
  const { course, img, price, instructorName, seat, studentsEnrolled } =
    classes;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-500">Learn {course}</h2>
        <h3>{instructorName}</h3>
        <div className="flex justify-between text-xl">
          <p>Available Seat: {seat}</p>
          <p className="flex justify-end items-center"><span className="inline-block"><IoPeopleOutline></IoPeopleOutline> </span>  {studentsEnrolled}</p>
        </div>
        <hr />
        <div className="card-actions justify-between items-center">
          <p>${price}</p>
          { seat != 0 && <button className="btn text-white bg-blue-500">Buy Now</button>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
