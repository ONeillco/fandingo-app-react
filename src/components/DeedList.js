import React, {useEffect, useState} from 'react'
import DeedCard from './DeedCard'

const DogList = () => {
  const [ deeds, setDeeds ] = useState([])




  useEffect(() => {
    fetch(`http://localhost:9393/deeds`)
      .then(res => res.json())
      .then(data => setDeeds(data))
    }, [])

    const removeDeed = id => {
      setDeeds(deeds.filter( deed => deed.id !== id))
    }

    const deleteDeed = async id => {
      await fetch(`http://localhost:9393/deeds${ id }`, { method: "DELETE" })
      removeDeed( id );
    }

   

    const deedCards = deeds.map((deed, index) => <DeedCard key={index} deed={deed} deleteDeed={ deleteDeed } />)

  return (
    <div>
      <h1>deeds</h1>
      {deedCards}
    </div>
    
  )
}

export default DogList
