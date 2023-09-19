import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className=" text-lg my-5">Administra tus <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
      <div className="md:h-screen md:overflow-y-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  )
}

export default ListadoPacientes
