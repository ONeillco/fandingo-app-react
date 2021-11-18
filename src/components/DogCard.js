import React from 'react'
import { NavLink } from 'react-router-dom';

const DogCard = ({ dog, deleteDog }) => {
  return (
    <div>
      <h4>Name and  Breed</h4>
    <li>
    <NavLink to={`/dogs/${dog.id}`}>{dog.name}, {dog.breed} </NavLink> - <button onClick={ () => deleteDog(dog.id) }>Delete</button>
    </li>
     </div>
  )
}

export default DogCard