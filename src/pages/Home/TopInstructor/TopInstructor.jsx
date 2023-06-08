import InstructorCard from "../../Shared/InstructorCard/InstructorCard";
import useInstructor from "../../../component/useInstructor/useInstructor";

const TopInstructor = () => {
    const [instructors] = useInstructor();
    return (
        <div className="my-10 mx-5 lg:mx-16">
            <h1 className="text-center text-5xl font-bold text-blue-500 p-10">Our Popular Instructor</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                instructors.slice(0,6).map(instructor => <InstructorCard
                key={instructor._id}
                instructor={instructor}
                ></InstructorCard>)
            }
           </div>
        </div>
    );
};

export default TopInstructor;