
import './App.css';
import Home from './Home';
import Bio from './Bio';
import News from './News';
import Nav from './Nav';



import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Works from './Works';
import Question from './Question';

function App() {
  return (
    <div>
    
       <Nav/>
    
    <Routes>
      <Route path="/harshini" element={<Home/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/bio" element={<Bio/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/news" element={<News />}/>
    </Routes>
    
   
    
   </div>
  );
}

export default App;
