import React, { useEffect } from 'react'
import {getAllCountries }  from './../redux/countriesSlice';
import { useAppSelector, useAppDispatch } from './../redux/hooks'


function Country() {
    const dispatch = useAppDispatch()
    const countries = useAppSelector(store => store.countries);
    const countriesData = countries.data
  console.log(countriesData)
    useEffect(() => {
      dispatch(getAllCountries())
    },[])
  return (
    <React.Fragment>
        <div className='container px-8 lg:px-0 pt-6 lg:pt-12 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 lg:gap-x-16 gap-y-10 justify-center'>
        {countriesData.map((country, index) => (
                    <div key={index} className=' bg-white rounded-md shadow-md max-w-96 lg:hover:drop-shadow-2xl lg:hover:-translate-y-4 lg:duration-500 lg:transition'>
                        <img src={country.flag} alt={country.name} className='w-full h-40 rounded-tl-md rounded-tr-md object-cover group'/>
                        <div className='px-8 py-4 space-y-1 group'>
                            <h3 className='font-semibold text-base mb-2'>{country.name}</h3>
                            <p className='font-medium'>Population: <span className='font-normal text-gray-700'>{country.population.toFixed()}</span></p>
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