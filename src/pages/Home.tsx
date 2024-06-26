import React from 'react'
import Header from '../components/Header'
import Filter from '../components/search/Filter'
import Input from '../components/search/Input'
import Country from '../components/Country'

interface CountryProps {
    searchBool: boolean;
    filterBool: boolean;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setFilterRegionTerm : React.Dispatch<React.SetStateAction<string>>
    searchTerm: string;
    filterRegionTerm: string
  }
  
function Home({searchBool , filterBool ,searchTerm,filterRegionTerm,  setSearchTerm , setFilterRegionTerm}:CountryProps) {

  return (
    <React.Fragment>
        <Header />
        <div className='container flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between pt-2 px-8 lg:px-0 md:pt-8'>
            <Input setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Filter setFilterRegionTerm={setFilterRegionTerm} filterRegionTerm={filterRegionTerm} />
        </div>
        <Country searchBool={searchBool} filterBool={filterBool}/>
    </React.Fragment>
  )
}

export default Home