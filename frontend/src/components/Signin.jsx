import { Link, useNavigate } from "react-router-dom"
import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signin(){
    const Username=useRef();
    const Password=useRef();

    const navigate=useNavigate();

    async function SignIn() {
  
        
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username: Username.current.value,
                password: Password.current.value,
            });
            console.log(response.data);
           
            localStorage.setItem("token",response.data.id);
            localStorage.setItem("name",response.data.name);
            //to get value: localStorage.getItem("token")
            toast("sucessfully signed in",{
              onClose:()=>{
                navigate('/dashboard')
              }
            })

        } catch (error) {
            console.error('Error:', error);
        }
    }


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <h1>Sign In</h1>
        <p>Enter your infromation to signIn</p>
       
        <h2>Email</h2>
        <input placeholder="akashjena@gmail.com" className=' border rounded border-slate-200 p-2' ref={Username}></input>
        <h2>Password</h2>
        <input placeholder="******" className=' border rounded border-slate-200 p-2' ref={Password}></input>
     
        <div className="pt-4">
          <button className='w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={SignIn}>Sign In</button>
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={'/signup'}> Don't have an account
        signup
      </Link>
      </div>
    </div>
    <ToastContainer/>
  </div>


}