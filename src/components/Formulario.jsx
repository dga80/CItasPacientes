import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import Error from "./Error";
const Formulario = ({pacientes, setPacientes, paciente}) => {

  const [nombre, setNombre]= useState('');
  const [propietario, setPropietario]= useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha]= useState('');
  const [sintomas, setSintomas]= useState('');

  const [error, setError]= useState(false)

  useEffect(() => {
    // comprobar si el array está vacío y setear los valores en los inputs del formulario
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validación formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    } 
    setError(false)

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }
    setPacientes([...pacientes, objetoPaciente])

    //resetear formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 md:mr-10">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg my-5">Añade pacientes y <span className="text-indigo-600 font-bold">Adminístralos</span></p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 text-left">
        {error && <Error mensaje='Obligatorio completar todos los campos'/>}
        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota" 
            type="text" 
            placeholder="nombre mascota" 
            className="border-2 w-full p-2 mt-3 rounded-md placeholder-slate-400"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
            id="propietario" 
            type="text" 
            placeholder="nombre propietario" 
            className="border-2 w-full p-2 mt-3 rounded-md placeholder-slate-400"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label 
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="email" 
            className="border-2 w-full p-2 mt-3 rounded-md placeholder-slate-400"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">Alta</label>
          <input 
            id="alta" 
            type="date" 
            className="border-2 w-full p-2 mt-3 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-3 rounded-md placeholder-slate-400"
            placeholder="describe los síntomas"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="w-full py-2 uppercase bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition-all"
          value= {paciente.id ? "editar paciente" : "agregar paciente"}   
        />
      </form>
    </div>
    
  )
}

Formulario.propTypes={
  paciente:PropTypes.object,
  pacientes:PropTypes.array,
  setPacientes:PropTypes.func
}
export default Formulario
