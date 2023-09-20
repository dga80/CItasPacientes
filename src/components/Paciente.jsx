import PropTypes from 'prop-types'


const Paciente = ({p}) => {
  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 text-left mb-5">
      <p className="text-gray-700 uppercase font-bold">Mascota: <span className="normal-case font-normal">{p.nombre}</span></p>
      <p className="text-gray-700 uppercase font-bold">Nombre propietario: <span className="normal-case font-normal">{p.propietario}</span></p>
      <p className="text-gray-700 uppercase font-bold">Email: <span className="normal-case font-normal">{p.email}</span></p>
      <p className="text-gray-700 uppercase font-bold">Fecha de Alta: <span className="normal-case font-normal">{p.fecha}</span></p>
      <p className="text-gray-700 uppercase font-bold">Síntomas: <span className="normal-case font-normal">{p.sintomas}</span></p>
    </div>
    
  )
}
Paciente.propTypes={
  p:PropTypes.object,
  setPacientes:PropTypes.func
}
export default Paciente
