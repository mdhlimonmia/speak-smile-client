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
    <div className="my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-16">
        {courses
          .sort((a, b) => a.seat - b.seat)
          .map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
      </div>
    </div>
  );
};

export default TopCourses;
