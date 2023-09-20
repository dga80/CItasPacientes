import PropTypes from 'prop-types'
const Error = ({mensaje}) => {
  return (
    <div>
    <p className="bg-red-800 text-white py-3 rounded-md mb-3 text-center uppercase">{mensaje}</p>
    </div>
  )
}

Error.propTypes={
  mensaje:PropTypes.string
}
export default Error
