
import Bio from "./Bio";
import Logo from "./Logo";
import News from "./News";
import Question from "./Question";
import Works from "./Works";
import {Link} from 'react-router-dom';
import Home from "./Home";
import './Nav.css';
import logo from "./Logo.jpg"



function Nav(){
   return(
      <nav className="navigation">

      <div className="logo font" style={{marginLeft:"18px"}}> 
       
       <img src={logo} style={{height:"50px",borderRadius:"16px"}}/>




      <Link to="/harshini" style={{fontSize:"35px", lineHeight:"25px", fontFamily:"font-family: 'Cormorant Garamond', serif;",color:"black",textDecoration:"none",textAlign:"center",position:"absolute",bottom:"2px",marginLeft:"80px",bottom:"11px"}}>HARSHINI</Link>
      </div>

      <div className="nav">
      <Link to="/works" className="text " style={{padding:"0 22px 0 25px",  lineHeight:2,}}> Works </Link>


      <Link to="/bio" className="text" style={{padding:"0 22px 0 25px", lineHeight:2,}}> Bio </Link>


      <Link to="/question" className="text" style={{padding:"0 22px 0 25px",  lineHeight:2,}}> Questions </Link>


      <Link to="/news" className="text"
      style={{padding:"0 22px 0 25px", lineHeight:2,marginRight: "17px"}}> NewsLetter </Link>
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
