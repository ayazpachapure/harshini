
import Bio from "./Bio";
import Logo from "./Logo";
import News from "./News";
import Question from "./Question";
import Works from "./Works";
import {Link} from 'react-router-dom';
import Home from "./Home";
import './Nav.css';


function Nav(){
   return(
      <nav className="navigation">

      <div className="logo font" style={{marginLeft:"18px"}}>    
      <Link to="/" style={{fontSize:"35px", lineHeight:"25px", fontFamily:"font-family: 'Cormorant Garamond', serif;",color:"white",textDecoration:"none",textAlign:"center"}}>HARSHINI</Link>
      </div>

      <div className="nav">
      <Link to="/works" className="text " style={{padding:"0 22px 0 25px", borderRight:"1px solid", lineHeight:2,borderRightColor:"white"}}> Works </Link>


      <Link to="/bio" className="text" style={{padding:"0 22px 0 25px", borderRight:"1px solid", lineHeight:2,borderRightColor: "white"}}> Bio </Link>


      <Link to="/question" className="text" style={{padding:"0 22px 0 25px", borderRight:"1px solid", lineHeight:2,borderRightColor: "white"}}> Questions </Link>


      <Link to="/news" className="text"
      style={{padding:"0 22px 0 25px", borderRight:"1px solid", lineHeight:2,borderRightColor:"white",marginRight: "17px"}}> NewsLetter </Link>
      <div style={{fontSize:"30px"}}>
      <a href="#" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      </div>

      </div>
      
   
      </nav>
     

        
   );
}

export default Nav
