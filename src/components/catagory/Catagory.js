import React from 'react'
import './Catagory.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { setType } from '../../redux/typesReducer'
import { API_URL } from 'constants/constants'

function Catagory(props) {
  const { catagory } = props
  const { name, src, id, index } = catagory
  const dispatch = useDispatch()

  return (
    <>
      <Link to="/meals">
        <div
          role="button"
          className="catagory-container"
          onClick={() => dispatch(setType(id))}
          tabIndex={index}
        >
          <h1>{name}</h1>
          <img src={API_URL + src} alt={name} />
        </div>
      </Link>
    </>
  )
}
Catagory.propTypes = {
  catagory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
}
export default Catagory
