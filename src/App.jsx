import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  return (
    <div className='mx-auto mt-20'>
      <Header/>
      <div className='mt-10 md:flex'>
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes} 
          paciente = {paciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          paciente = {paciente}
        />
      </div>
    </div>
  )
}

export default App
