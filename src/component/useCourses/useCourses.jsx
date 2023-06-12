import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://speak-smile-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
    return [courses]
};
export default useCourses;