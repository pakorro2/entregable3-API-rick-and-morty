import React from 'react'

const FilterList = ({ suggestedList, setimputSearch }) => {

  const handleClick = id => setimputSearch(id)
  return (
    <ul className='list__search'>
      {
        suggestedList?.map(location => (
          <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ))
      }
    </ul>
  )
}

export default FilterList