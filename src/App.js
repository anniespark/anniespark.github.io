import './App.css';
import Body from './Body';
import Header from './Header';
import Hero from './Hero';
import { Outlet } from "react-router-dom";
import SmallWithNavigation from './SmallWithNavigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <SmallWithNavigation/>
    </div>
  );
}

export default App;
