import { Link, useNavigate } from "react-router-dom"
import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup(){
    const FirstName=useRef();
    const LastName=useRef();
    const Username=useRef();
    const Password=useRef();

    const navigate=useNavigate();

 
    async function SignUp() {
     
        
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                username: Username.current.value,
                firstName: FirstName.current.value,
                lastName: LastName.current.value,
                password: Password.current.value,
            });
            console.log(response.data);
            localStorage.setItem("token",response.data.id);
            localStorage.setItem("name",response.data.name);

            toast("sucessfully created an Account !",{
              onClose:()=>{
                navigate('/dashboard');
              }
            })
           
         

        } catch (error) {
            console.error('Error:', error.response.data);
        }
    }
    

    return<div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <div className="text-3xl font-serif">Sign Up</div>
        <p>Enter your infromation to create an account</p>
        <h2>First Name</h2>
        <input placeholder="John" className=' border rounded border-slate-200 p-2' ref={FirstName}></input>
        <h2>Last Name</h2>
        <input placeholder="Kumar" className=' border rounded border-slate-200 p-2' ref={LastName}></input>
        <h2>Email</h2>
        <input placeholder="akashjena@gmail.com" className=' border rounded border-slate-200 p-2' ref={Username}></input>
        <h2>Password</h2>
        <input placeholder="******" className=' border rounded border-slate-200 p-2' ref={Password}></input>
     
        <div className="pt-4">
          <button className='w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={SignUp}>Sign Up</button>
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={'/signin'}> Already have an account
        signin
      </Link>
      </div>
    </div>
    <ToastContainer/>
  </div>
}