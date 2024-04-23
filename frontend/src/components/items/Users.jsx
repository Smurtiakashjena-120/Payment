import { useEffect, useState } from "react"

import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg italic ml-2">
            Platform Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-2/4 px-2 py-1 border rounded border-slate-200 bg-slate-700"></input>
            
        </div>
        <div>
            {users.map(user => <User user={user} />)}
           
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    if(user.username == localStorage.getItem("name")){
        return
    }

    return <div className="flex justify-between">
       
        <div className="flex ml-2">
            <div className="rounded-full h-12 w-12  bg-slate-500 flex justify-center mt-1 mr-2 border-slate-950 border-2">
                <div className="flex flex-col justify-center h-full text-xl text-amber-200">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful mr-5">
           
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={(e)=>{
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }}>
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Pay User
</span>
</button>

        </div>
    </div>
}