import estilos from './Navbar.module.css'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export function Navbar(){

      const navegação = useNavigate();

  async function deslogar() {
    try {
      await signOut(auth);
      navegação("/"); 
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  }

    return(
        
        <div className={estilos.geral}>
          <div className={estilos.logo}>
            <img src={logo} alt="Logo" />
          </div>
                <div className={estilos.links}>
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/inicial'}>Inicio</NavLink> 
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/sobre'}>Sobre</NavLink>  
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/contato'}>Contato</NavLink> 
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/ficha'}>Configuração</NavLink>  
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/Administrador'}>Administrador</NavLink>  

                </div>
                <div className={estilos.sair}>
                  <button onClick={deslogar}>Sair</button>
                </div>
        </div>

       
    )
}