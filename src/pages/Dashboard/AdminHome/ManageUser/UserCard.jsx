
const UserCard = ({user}) => {
    const {name, img, status, email} = user;
    return (
          <tbody>
            {/* row 1 */}
            <tr className="text-white">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h1>{name}</h1>
              </td>
              <td>{email}</td>
              <th>
                <h1>{status}</h1>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-blue-500 mx-5">Make Admin</button>
                <button className="btn btn-ghost btn-xs bg-blue-500">Make Instructor</button>
              </th>
            </tr>
          </tbody>
    );
};

export default UserCard;