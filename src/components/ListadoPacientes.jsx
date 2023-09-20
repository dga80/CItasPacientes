/* eslint-disable react/jsx-key */
import Paciente from "./Paciente"
import PropTypes from 'prop-types'


const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className=" text-lg my-5">Administra tus <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
      
      <div className="md:h-screen md:overflow-y-scroll">
        {pacientes.map((p) => (
          <Paciente 
          p={p}
          key={p.id}
          />
))}
      </div>
    </div>
  )
}
ListadoPacientes.propTypes={
  pacientes:PropTypes.array,
  setPacientes:PropTypes.func
}
export default ListadoPacientes
