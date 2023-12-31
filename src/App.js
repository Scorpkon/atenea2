

import {useAuth0} from '@auth0/auth0-react';
import Home from './pages/Home';
import {Login} from './auth/Login';
import {Logout} from './auth/Logout';
import { Link,Route,Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';


function App() {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="App">
      <header className="App-header">
       {isAuthenticated ? (
        <>
        <nav>
        <Link to ='/favorites'>Favoritos</Link>
        <Link to ='/home'>Home</Link>
        <Link to ='/logout'>Logout</Link>
        
        </nav>
        </>
       ):(
        <Login/>
       )}
        
      </header>
      
      <Routes>
      <Route path='/logout' element={<Logout/>} />
      <Route path='/home' element={<SearchBar/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
