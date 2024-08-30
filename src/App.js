import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter, Routes, Route, useNavigate 
} from "react-router-dom";

import Login from './Screens/Login';
import Home from './Screens/Home';
import TVShows from './Screens/TVShows';
import MyList from './Screens/MyList';
import Movies from './Screens/Movies';
import NewPopular from './Screens/NewPopular';
import Search from './Screens/Search';
import Detailpage from './components/Detailpage';
import SignUp from './Screens/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/signup' element= {<SignUp/>}/>
      <Route path='/home' element= {<Home/>}/>
      <Route path='/tvshows' element= {<TVShows/>}/>
      <Route path='/mylist' element= {<MyList/>}/>
      <Route path='/movies' element= {<Movies/>}/>
      <Route path='/new&popular' element= {<NewPopular/>}/>
      <Route path='/search' element= {<Search/>}/>
      <Route path='/detailpage/:id/:type' element={<Detailpage />} /> {/* Add the Detailpage route */}
      </Routes>
    </div>
  );
}

export default App;
