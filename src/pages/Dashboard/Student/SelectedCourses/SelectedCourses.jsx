import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useCourses from "../../../../component/useCourses/useCourses";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const SelectedCourses = () => {
    const [course, setCourse] = useState([]);
    const [courses] = useCourses()
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        fetch("http://localhost:5000/selected")
        .then(res => res.json())
        .then(data => {
            setCourse(data.filter(k => k.email === user?.email));
        })
    },[])
    console.log('selected', course);
    const filteredArray  = courses.filter(function(array_el){
        return course.filter(function(anotherOne_el){
           return anotherOne_el.id == array_el._id;
        }).length == 0
     });     
//    console.log('new', filteredArray);
    return (
        <div>
            <h1>My Selected Courses</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArray.map((classes) => (
            <CourseCard key={classes._id} classes={classes}></CourseCard>
          ))}
        </div>
        </div>
    );
};

export default SelectedCourses;