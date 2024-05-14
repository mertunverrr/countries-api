import React from 'react'

interface CountryProps {
  setFilterRegionTerm: React.Dispatch<React.SetStateAction<string>>
}

function Filter({setFilterRegionTerm}:CountryProps) {
  return (
        <React.Fragment>
            <select className='p-2 w-44 rounded-md' onChange={(e) => setFilterRegionTerm(e.target.value)}>
                <option value="all" >All Regions</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </React.Fragment>
  )
}

export default Filter