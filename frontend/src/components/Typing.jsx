import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import '../App.css';
 
function Typing() {
    return (
        <div className="Typing text-3xl font-serif">
            
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("WelCome To NoLoad !!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Let's Get Started")
                        .start();
                }}
            />
        </div>
    );
}
 
export default Typing;