import React, { useState } from 'react'
import { addUser } from '../redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const  dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({id: users[users.length -1].id + 1, name, email}))
        navigate('/')
    }
    return (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create User</button>
        </form>
      );
    };

export default Create