import { useContext } from "react";
import useInstructor from "../../../../component/useInstructor/useInstructor";
import { AuthContext } from "../../../../providers/AuthProvider";

const InstructorHome = () => {
  const [instructors] = useInstructor();
  const { user } = useContext(AuthContext);
  const currentInstructor = instructors.find(
    (instructor) => user?.email === instructor?.email
  );
  // console.log(currentInstructor);
  return (
    <div>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src= {currentInstructor?.img}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Name: {currentInstructor?.name}</h1>
              <p className="py-1">Email: {currentInstructor?.email}</p>
              <p className="py-1">
                Details Coming soon........................
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
