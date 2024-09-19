import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [disabled,setDisabled] = useState(false);
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch("https://speak-smile-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeAdmin = (user, status) => {
    fetch(`https://speak-smile-server.vercel.app/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setDisabled(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an ${status.status} Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <>
              <tbody>
                <tr className="text-white">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{user?.name}</h1>
                  </td>
                  <td>{user?.email}</td>
                  <th>
                    <h1>{user?.status}</h1>
                  </th>
                  <th>
                    <button
                      onClick={() => handleMakeAdmin(user, { status: "admin" })}
                      className="btn btn-ghost btn-xs bg-blue-500 mx-5"
                    >
                      Make Admin
                    </button>
                    <button
                      disabled={disabled}
                      onClick={() =>
                        handleMakeAdmin(user, { status: "instructor" })
                      }
                      className="btn btn-ghost btn-xs bg-blue-500"
                    >
                      Make Instructor
                    </button>
                  </th>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
