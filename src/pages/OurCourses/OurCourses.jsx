import { Helmet } from "react-helmet-async";
import useCourses from "../../component/useCourses/useCourses";
import CourseCard from "../Shared/CourseCard/CourseCard";

const OurCourses = () => {
  const [courses] = useCourses();
  return (
    <>
    <Helmet>
        <title>SpSmile | Courses</title>
    </Helmet>
      <div className="mx-5 lg:mx-16">
        <h1 className="text-center text-5xl font-bold text-blue-500 p-10">
          Our Courses
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((classes) => (
            <CourseCard key={classes._id} classes={classes}></CourseCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCourses;
