import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardResident = ({ url }) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then((res) => setResident(res.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <article  >
      <header className='card'>
        <img className="circle" src={resident?.image} alt={resident?.name} />
        <div>
          <div className="circle"></div>
          <span>{resident?.status}</span>
        </div>
        <section>
          <h2>{resident?.name}</h2>
          <ul>
            <li><span>Specie: </span>{resident?.species}</li>
            <li><span>Origin: </span>{resident?.origin.name}</li>
            <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
          </ul>
        </section>
      </header>
    </article>
  )
}

export default CardResident