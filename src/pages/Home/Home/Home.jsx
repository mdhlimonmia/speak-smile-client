import Banner from "../Banner/Banner";
import PhotoSection from "../PhotoSection/PhotoSection";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructor from "../TopInstructor/TopInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCourses></TopCourses>
            <PhotoSection></PhotoSection>
            <TopInstructor></TopInstructor>
        </div>
    );
};

export default Home;