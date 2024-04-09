import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}))
  }
  
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Link to="/create"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-3 rounded mr-2">
        Create
      </button></Link>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Name</th>
              <th className="border border-gray-500 px-4 py-2">Email</th>
              <th className="border border-gray-500 px-4 py-2">ID</th>
              <th className="border border-gray-500 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-500 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-500 px-4 py-2">{user.id}</td>{" "}
                <td className="border border-gray-500 px-4 py-2">
                  <Link to={`/edit/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
