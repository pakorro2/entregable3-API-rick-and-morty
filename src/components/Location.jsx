import React from 'react'
import izq from '../assets/img/izq.png'
import der from '../assets/img/der.png'

const Location = ({ location }) => {

  return (
    <article className='column flex-center' >
      <div className='location__content ordena'><img src={izq} /><h2 className='location__title'> {location?.name}</h2><img src={der} /></div>
      <ul className='location__bar'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>

    </article>
  )
}

export default Location