import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("../../../public/instructor.json")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return [instructors];
};

export default useInstructor;