import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/instructors")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return [instructors];
};

export default useInstructor;