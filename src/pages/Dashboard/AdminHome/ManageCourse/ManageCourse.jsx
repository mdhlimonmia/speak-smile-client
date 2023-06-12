import useCourses from "../../../../component/useCourses/useCourses";
import ManageCoursesCard from "./ManageCoursesCard";

const ManageCourse = () => {
    const [courses] = useCourses();
    return (
        <div>
            <div>
                {
                    courses.map(classes => <ManageCoursesCard
                    key={classes._id}
                    classes={classes}
                    ></ManageCoursesCard>)
                }
            </div>
        </div>
    );
};

export default ManageCourse;