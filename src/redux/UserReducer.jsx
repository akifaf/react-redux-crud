import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../data'

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload
            const upuser = state.find(user => user.id == id)
            if  (upuser) {
                upuser.name = name,
                upuser.email = email
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload
            const upuser = state.find(user => user.id == id)
            if  (upuser) {
                return state.filter(f => f.id != id)
            }
            
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer