import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar.js';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
