import React from 'react'

const Location = ({ location }) => {

  return (
    <article className='column flex-center' >
      <h2 className='location__title'>{location?.name}</h2>
      <ul className='location__bar'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>

    </article>
  )
}

export default Location