import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("https://speak-smile-server.vercel.app/instructors")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return [instructors];
};

export default useInstructor;