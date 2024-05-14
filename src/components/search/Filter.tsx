import React from 'react'

function Filter() {
  return (
        <React.Fragment>
            <select className='p-2 w-44 rounded-md'>
                <option value="all">All Regions</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europa">Europa</option>
                <option value="oceania">Oceania</option>
            </select>
        </React.Fragment>
  )
}

export default Filter