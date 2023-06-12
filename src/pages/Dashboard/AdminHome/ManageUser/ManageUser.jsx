import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          {users.map((user) => 
          <UserCard
          key={user._id}
          user={user}
          ></UserCard>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
