import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Containers/Home';
import Skills from './Containers/Skill';
import Project from './Containers/Project';
import NavBar from './Components/NavBar';
import Contact from './Containers/Contacts';
import PreLoader from './Components/PreLoader/Preloader';

function App() {
  return (
    <>
<PreLoader/>
<div className="App">

  
<NavBar/>

<Routes>
<Route index path='/' element={<Home/>}/>
<Route path='/skills' element={<Skills/>}/>
<Route path='/projects' element={<Project/>}/>
<Route path='/contacts' element={<Contact/>}/>
</Routes>

  </div>


    </>
      );
}

export default App;
