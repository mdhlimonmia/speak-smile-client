import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PhotoSection from "../PhotoSection/PhotoSection";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructor from "../TopInstructor/TopInstructor";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SpSmile | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <TopCourses></TopCourses>
        <PhotoSection></PhotoSection>
        <TopInstructor></TopInstructor>
      </div>
    </>
  );
};

export default Home;
