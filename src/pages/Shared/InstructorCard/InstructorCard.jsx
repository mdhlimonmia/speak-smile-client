import useCourses from "../../../component/useCourses/useCourses";

const InstructorCard = ({ instructor }) => {
  const { img, name, email } = instructor;
  const [courses] = useCourses();
  const student = courses.filter((course) => course.instructorEmail === email);
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-blue-500">{name}</h2>
        <h3 className="">{email} </h3>
        <div className="card-actions justify-between items-center"></div>
        <div className="flex justify-between">
          <p>Bangla | <span className="text-blue-500">{student[0]?.course}</span></p>
          <p>Courses: {student?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
