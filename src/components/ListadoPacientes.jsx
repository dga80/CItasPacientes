/* eslint-disable react/jsx-key */
import Paciente from './Paciente';
import PropTypes from 'prop-types';

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {/* pacientes.length === 0 sería lo mismo que lo de abajo */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg my-5">
            Administra tus <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          <div className="md:h-screen md:overflow-y-scroll">
            {pacientes.map((p) => (
              <Paciente p={p} key={p.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Sin Pacientes</h2>
          <p className="text-lg my-5">
            Comienza <span className="text-indigo-600 font-bold">agregando pacientes</span>
          </p>

          <div className="md:h-screen md:overflow-y-scroll">
            {pacientes.map((p) => (
              <Paciente p={p} key={p.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array,
  // Remove setPacientes if it's not used
};

export default ListadoPacientes;
