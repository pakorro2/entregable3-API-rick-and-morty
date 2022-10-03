import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import Location from './components/Location'
import getRandomNumber from './utils/functions/getRandomNumber'
import Error from './components/Error'
import Video from './assets/img/Video.mp4'
import logo from './assets/img/logo-rick-and-morty.png'

function App() {
  // Para guardar location
  const [location, setLocation] = useState()
  // Para guardar la información del imput y hacer la peticion de cuando se hace submit
  const [imputSearch, setimputSearch] = useState('')
  // Para guardar las sugerencias de la api (buscador tipo google)
  const [suggestedList, setSuggestedList] = useState()
  // Estado para manejar el error del catch y  manejar de manera condicinal el renderizado
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (imputSearch) {
      id = imputSearch
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then((res) => {
        setHasError(false)
        setSuggestedList()
        setLocation(res.data)
        search.reset()
      })
      .catch(err => setHasError(true))
  }, [imputSearch])

  const handleSubmit = e => {
    e.preventDefault()
    setimputSearch(e.target.idLocation.value)
  }
  const handleChange = e => {

    if (e.target.value === '') {
      setSuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

      axios.get(URL)
        .then((res => setSuggestedList(res.data.results)))
        .catch(err => console.log(err))
    }

  }

  return (
    <div className="App">
      <header className='header__container' >
        <video muted='muted' autoplay='autoplay' loop>
          <source src={Video} type="video/mp4" />
        </video>
        <img className='header__logo' src={logo} alt="Rick and Morty" />
        <form id='search' className='form__search' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter a number from 1 to 126'
            id='idLocation'
            onChange={handleChange}
            className='search__imput'
          />
          <button className='search__btn'>Search</button>
          <FilterList suggestedList={suggestedList} setimputSearch={setimputSearch} className='suggested__list' />
        </form>
      </header>
      {
        hasError ?
          <Error />
          :
          <>
            <Location location={location} />
            <div className='flex-center'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
