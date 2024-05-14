import React, { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from './../redux/hooks'

interface CountryProps {
  searchBool: boolean;
  filterBool: boolean;
}

function Country({ searchBool , filterBool}: CountryProps) {
    
    const countries = useAppSelector(store => store.countries);
    const countriesData = countries.data
    const searchedCountries = countries.searchedCountries
    const filteredCountries = countries.filteredCountries
    let searchAndFilteredCountries = countries.searchAndFilteredCountries
    


  return (
    <React.Fragment>
        <div className='container px-8 lg:px-0 pt-6 lg:pt-12 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 lg:gap-x-16 gap-y-10 justify-center'>
        {searchBool && filterBool && searchAndFilteredCountries.map((country , index) => ( 
          <><div key={index} className=' bg-white rounded-md shadow-md max-w-96 lg:hover:drop-shadow-2xl lg:hover:-translate-y-4 lg:duration-500 lg:transition'>
          <img src={country.flag} alt={country.name} className='w-full h-40 rounded-tl-md rounded-tr-md object-cover'/>
          <div className='px-8 py-4 space-y-1'>
              <h3 className='font-semibold text-base mb-2'>{country.name}</h3>
              <p className='font-medium'>Population: <span className='font-normal text-gray-700'>{country.population.toLocaleString()}</span></p>
              <p className='font-medium'>Region: <span className='font-normal text-gray-700'>{country.region}</span></p>
              <p className='font-medium'>Capital: <span className='font-normal text-gray-700'>{country.capital}</span></p>
          </div>
      </div>
      </>
          
        ))}
        {!searchBool && filterBool && filteredCountries.map((country , index) => ( 
          <div key={index} className=' bg-white rounded-md shadow-md max-w-96 lg:hover:drop-shadow-2xl lg:hover:-translate-y-4 lg:duration-500 lg:transition'>
          <img src={country.flag} alt={country.name} className='w-full h-40 rounded-tl-md rounded-tr-md object-cover'/>
          <div className='px-8 py-4 space-y-1'>
              <h3 className='font-semibold text-base mb-2'>{country.name}</h3>
              <p className='font-medium'>Population: <span className='font-normal text-gray-700'>{country.population.toLocaleString()}</span></p>
              <p className='font-medium'>Region: <span className='font-normal text-gray-700'>{country.region}</span></p>
              <p className='font-medium'>Capital: <span className='font-normal text-gray-700'>{country.capital}</span></p>
          </div>
      </div>
        ))}
        {searchBool && !filterBool && searchedCountries.map((country , index) => ( 
          <div key={index} className=' bg-white rounded-md shadow-md max-w-96 lg:hover:drop-shadow-2xl lg:hover:-translate-y-4 lg:duration-500 lg:transition'>
          <img src={country.flag} alt={country.name} className='w-full h-40 rounded-tl-md rounded-tr-md object-cover'/>
          <div className='px-8 py-4 space-y-1'>
              <h3 className='font-semibold text-base mb-2'>{country.name}</h3>
              <p className='font-medium'>Population: <span className='font-normal text-gray-700'>{country.population.toLocaleString()}</span></p>
              <p className='font-medium'>Region: <span className='font-normal text-gray-700'>{country.region}</span></p>
              <p className='font-medium'>Capital: <span className='font-normal text-gray-700'>{country.capital}</span></p>
          </div>
      </div>
        ))}
        {!searchBool && !filterBool && countriesData.map((country , index) => ( 
          <div key={index} className=' bg-white rounded-md shadow-md max-w-96 lg:hover:drop-shadow-2xl lg:hover:-translate-y-4 lg:duration-500 lg:transition'>
          <img src={country.flag} alt={country.name} className='w-full h-40 rounded-tl-md rounded-tr-md object-cover'/>
          <div className='px-8 py-4 space-y-1'>
              <h3 className='font-semibold text-base mb-2'>{country.name}</h3>
              <p className='font-medium'>Population: <span className='font-normal text-gray-700'>{country.population.toLocaleString()}</span></p>
              <p className='font-medium'>Region: <span className='font-normal text-gray-700'>{country.region}</span></p>
              <p className='font-medium'>Capital: <span className='font-normal text-gray-700'>{country.capital}</span></p>
          </div>
      </div>
        ))}

        
        </div>
        
    </React.Fragment>
  )
}

export default Country