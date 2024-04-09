import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { updateUser } from "../redux/UserReducer";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Update() {
  const { id } = useParams()
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
      navigate('/')
  }
  
  return (
    <div className="container mx-auto">
    <div className="max-w-md mx-auto m-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
            name="name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            value={uemail}
            
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update User
        </button>
      </form>
      </div>
    </div>
  );
}

export default Update;
