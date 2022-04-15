import logo from './logo.svg';
import './App.css';


import CompShowUsuarios from './usuario/ShowUsuario';
import CompCreateUsuarios from './usuario/CreateUsuario';
import CompEditUsuario from './usuario/EditUsuario';

import CompShowTickets from './ticket/ShowTicket';
import CompCreateTickets from './ticket/CreateTicket'
import CompEditTickets from './ticket/EditTicket'


import CompShowAsgCaso from './asignacioncaso/ShowAsgCaso';
import CompCreateAsgCaso from   './asignacioncaso/CreateAsgCaso';
import CompEditAsgCas from './asignacioncaso/EditAsgCaso'



import CompMainMenu from './app/MainMenu'
import ComplogUsuarios from './app/logUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    
      
      <header className="App-header">
      
       


        <BrowserRouter>
        
        
        <CompMainMenu/>
        <img src={logo} className="App-logo" alt="logo" />

        
          <Routes>
           

            <Route path="/" element={<ComplogUsuarios/>}/>


            <Route path="/Usuarios/" element={<CompShowUsuarios/>}/>
            <Route path="/Usuarios/create" element={<CompCreateUsuarios/>}/>
            <Route path="/Usuarios/edit/:id" element={<CompEditUsuario/>}/>



            <Route path="/Tickets/" element={<CompShowTickets/>}/>
            <Route path="/Tickets/create" element={<CompCreateTickets/>}/>
            <Route path="/Tickets/edit/:id" element={<CompEditTickets/>}/>


            <Route path="/AsignacionCaso/" element={<CompShowAsgCaso/>}/>
            <Route path="/AsignacionCaso/create" element={<CompCreateAsgCaso/>}/>
            <Route path="/AsignacionCaso/edit/:id" element={<CompEditAsgCas/>}/>

            <Route path="*" element={<ComplogUsuarios/>}/>
            
          </Routes>
        </BrowserRouter>





       

      </header>

   
    </div>
  );
}

export default App;
