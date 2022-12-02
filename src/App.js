import './App.css';
import Body from './Body';
import Header from './Header';
import Hero from './Hero';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
