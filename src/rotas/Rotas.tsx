import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Cadastro} from '../paginas/Cadastro'
import {Sobre} from '../paginas/Sobre'
import {Contato} from '../paginas/Contato'
import { Inicial } from '../paginas/Inicial'    
import { Administrador } from '../paginas/Administrador'
import { Navbar } from '../componentes/Navbar'

export function Rotas(){
    return(
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={< Inicial/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/administrador' element={<Administrador/>} />
      </Routes>
    </BrowserRouter>
    )
}