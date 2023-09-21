import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [paciente, setPaciente] = useState({})

  return (
    <div className='mx-auto mt-20'>
      <Header/>
      <div className='mt-10 md:flex'>
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes} 
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}

        />
      </div>
    </div>
  )
}

export default App
