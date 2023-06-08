import { useEffect, useState } from "react";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const TopCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("../../../../public/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-10 mx-5 lg:mx-16">
        <h1 className="text-center text-5xl font-bold text-blue-500 p-10">Our Popular Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses
          .sort((a, b) => a.studentsEnrolled - b.studentsEnrolled).slice(0,6)
          .map((classes) => (
            <CourseCard key={classes._id} classes={classes}></CourseCard>
          ))}
      </div>
    </div>
  );
};

export default TopCourses;
