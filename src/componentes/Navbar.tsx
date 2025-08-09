import estilos from './Navbar.module.css'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

export function Navbar(){
    return(
        <div className={estilos.geral}>
            <img src={logo} alt="Logo" />
                <div className={estilos.links}>
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/'}>Inicio</NavLink> 
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/login'}>Login</NavLink>  
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/sobre'}>Sobre</NavLink>  
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/contato'}>Contato</NavLink>  
                    <NavLink className={({ isActive }) => isActive ? estilos.linkActive : estilos.link} to={'/administrador'}>Administrador</NavLink> 
                </div>
        </div>
    )
}