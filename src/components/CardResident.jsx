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
    <article className='card'>
      <header className='card__header'>
        <img className='card__img' src={resident?.image} alt={resident?.name} />
        <section>
          <div className='card__container-status' >
            <div className={`card__circle-status ${resident?.status}`}></div>
            <span className='card__status'>{resident?.status}</span>
          </div>
          <h2 className='card__title'>{resident?.name}</h2>
          <ul className='card__info-content'>
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