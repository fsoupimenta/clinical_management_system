import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar.js';
import MainBar from './components/MainBar.js'

function App() {
  return (
    <div className="App">
      <MainBar />
      <SideBar />
    </div>
  );
}

export default App;
