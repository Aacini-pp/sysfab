import logo from './logo.svg';
import './App.css';


import CompShowUsuarios from './usuario/ShowUsuario';
import CompCreateUsuarios from './usuario/CreateUsuario';
import CompEditUsuario from './usuario/EditUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CompShowUsuarios/>}/>
            <Route path="/create" element={<CompCreateUsuarios/>}/>
            <Route path="/edit/:id" element={<CompEditUsuario/>}/>
            
          </Routes>
        </BrowserRouter>





       

      </header>
    </div>
  );
}

export default App;
