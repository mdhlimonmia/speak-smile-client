import { useContext } from "react";
import useCourses from "../../../../component/useCourses/useCourses";
import { AuthContext } from "../../../../providers/AuthProvider";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const MyCourses = () => {
  const [courses] = useCourses();
  const { user } = useContext(AuthContext);
  const myCourses = courses.filter(
    (course) => user?.email === course?.instructorEmail
  );
  return (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        myCourses.map((classes) => (
            <CourseCard key={classes._id} classes={classes}></CourseCard>
          ))
      }
    </div>
    </div>
  );
};

export default MyCourses;
