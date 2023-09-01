import './App.css';
import Appbar from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Routes, Route } from "react-router-dom";
import Placetovisit from './components/place to visit/Placetovisit';
import Besttime from './components/best time to visit/Besttime';
import Foods from './components/Foods/Foods';
import Packages from './components/packages/Packages';
function App() {
  return (
    <div className="App">
       <Appbar/>
        <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/visit' element={  <Placetovisit/>}/>
      <Route path='/Best Time To Visit' element={<Besttime/>}/>
      <Route path='/packages'element={<Packages/>}/>
      <Route path='/foods' element={<Foods/>}/>
       
      </Routes>
</div>

  );
}

export default App;
