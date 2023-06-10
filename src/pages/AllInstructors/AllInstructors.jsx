import { Helmet } from "react-helmet-async";
import useInstructor from "../../component/useInstructor/useInstructor";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";

const AllInstructors = () => {
  const [instructors] = useInstructor();
  return (
    <>
      <Helmet>
        <title>SpSmile | Instructors</title>
      </Helmet>
      <div className="mx-5 lg:mx-16">
        <h1 className="text-center text-5xl font-bold text-blue-500 p-10">
          Our All Instructors
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllInstructors;
