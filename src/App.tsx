import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LivroLista from "./LivroLista";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivroDados from "./LivrosDados";

function App() {
  return (
    <BrowserRouter>
      
      <nav className="justify-content-start navbar bg-dark">
       
          
            
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dados" className="nav-link">
                  Novo
                </Link>
              </li>
          
        
        
      </nav>
      
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
