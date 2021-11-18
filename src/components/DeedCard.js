import React from 'react'
import {NavLink} from 'react-router-dom'

const DeedCard = ({deed, deleteDeed}) => {

  return (
   <div> 
     <h4>Deed and Type</h4>
    <li>
     <NavLink to={`/deed/${deed.id}`} > {deed.action}, {deed.category} </NavLink> <button onClick={ () => deleteDeed( deed.id ) }>Delete</button>
    </li>
    </div>
    
  )
}

export default DeedCard