//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Menubar from './components/Menubar';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Editor></Editor>

    </div>
  );
}

export default App;
