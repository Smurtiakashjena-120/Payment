import { useNavigate } from "react-router-dom"


export default function Appbar({name}){
    const navigate=useNavigate();
   
    function goToMain(){
        // localStorage.clear();
        navigate("/");
    }


    return <div className="shadow h-14 flex justify-between bg-gray-900 text-white ">
        <div className="flex flex-col justify-center h-full ml-4">
        <p class="text-xl font-semibold text-blue-600/50 dark:text-blue-500/50">NoLoad</p>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello  {name}
            </div>
            <div className="rounded-full h-12 w-12 bg-cyan-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                  {name[0].toUpperCase()}
                </div>
             
            </div>
            
        </div>
        <div className="flex items-center mr-3 mt-1">
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={goToMain}>LogOut</button>
          
        </div>
    </div>
}