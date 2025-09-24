import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Cadastro} from '../paginas/Cadastro'
import {Sobre} from '../paginas/Sobre'
import {Contato} from '../paginas/Contato'
import { Inicial } from '../paginas/Inicial'   
import { Ficha_medica } from '../paginas/Ficha_medica' 
import { CadHospital } from '../paginas/CadHospital'
import { EditHospital } from '../paginas/EditHosptial'
import { Navbar } from '../componentes/Navbar'
import { Outlet } from 'react-router-dom';


//mostrar navbar
export function ComNavbar() {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
}

export function Rotas(){
    return(
    <BrowserRouter>
      <Routes>

        {/* Rotas sem Navbar */}
        <Route path='/' element={< Login/>} />
        <Route path='/cadastro' element={<Cadastro />} />

        {/* Rotas com Navbar */}
        <Route element={<ComNavbar />} >
          <Route path='/inicial' element={<Inicial/>} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/cadHospital' element={<CadHospital/>} />
          <Route path='/editHospital' element={<EditHospital/>} />
          <Route path='/ficha' element={<Ficha_medica/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}