import { useEffect, useState } from "react"
import axios from 'axios'
import Appbar from "./items/AppBar";
import Balance from "./items/Balance";
import { Users } from "./items/Users";
import '../App.css'

export default function Dashboard(){
   
   

const [balance,setBalance]=useState(0);
const name=localStorage.getItem("name");

    async function getBalance(){
  const response=await axios.get("http://localhost:3000/api/v1/account/balance", {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
})
console.log(response.data);
setBalance(response.data.balance);

    }

    //calling function
    useEffect(()=>{
    getBalance();
    },[])

    
    return <div className="dashboard bg-slate-200 h-screen">
       <Appbar name={name}></Appbar>
       <Balance value={balance}></Balance>
       <Users></Users>
    </div>
}