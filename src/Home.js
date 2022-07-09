

import"./Home.css";
import { useState} from "react";
import { useEffect } from "react";
import{images} from "./array.js"




function Home(){
   let count=0;
    const [currImg,setcurrImg] = useState(0)
    const [sfalse,setsfalse] = useState(true)
   
    useEffect(()=> {
      
      const id = window.setInterval(()=>{
         // count++;
         // console.log(count)
         setcurrImg(currImg=>currImg+1)
         console.log(currImg)
         if(currImg==2){
            setcurrImg(0);
         }
         
      
      },3000);
      return()=>window.clearInterval(id)
        
   
    },[currImg]);

    
            
   
   return(
      

     <div className="div-class" style={{backgroundImage: `url(${images[currImg].img})`}}>

      <div className="arrows">
         <button onClick={()=>{
          if(currImg === 0){ 
            setcurrImg(images.length-1)
          }
          else{ return setcurrImg(currImg-1)}
            
            }}>&#8656;</button>
         <button onClick={()=>{
          if(currImg === images.length-1){ 
             setcurrImg(0)
          }
          else{ return setcurrImg(currImg+1)}
            
            }}>&#8658;</button> 
         
          </div>
      
      </div>

   )
}

export default Home;
