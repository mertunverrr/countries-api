import React from "react"


interface CountryProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  searchTerm: string
}

function InputAndFilter({setSearchTerm , searchTerm}:CountryProps) {
  

  return (
    <React.Fragment>
      <input type="text" placeholder='Search for a country...' value={searchTerm} className='p-3 text-sm rounded-md w-full mt-2 md:mt-0 md:w-96 outline-none' 
      onChange={(e) => setSearchTerm(e.target.value)}/>
    </React.Fragment>
  )
}

export default InputAndFilter