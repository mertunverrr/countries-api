import DetailsPage from "./pages/DetailsPage"
import Home from "./pages/Home"
import { useAppDispatch } from "./redux/hooks";
import {getAllCountries, searchCountries, filterCountries, searchAndFilterCountries }  from './redux/countriesSlice';
import { useEffect, useState } from "react"
import { Routes, Route} from 'react-router-dom';

function App() {
  const [searchTerm , setSearchTerm] = useState<string>("")
  const [filterRegionTerm , setFilterRegionTerm] = useState<string>("all")
  const [searchBool , setSearchBool] = useState<boolean>(false)
  const [filterBool , setFilterBool] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCountries())
  },[1])

  useEffect(() => {
    if(searchTerm === ""){
      setSearchBool(false)
      
    }else{
      setSearchBool(true)
      dispatch(searchCountries(searchTerm));
    }
    
  },[searchTerm])
  useEffect(() => {
    if(filterRegionTerm === "all"){
      setFilterBool(false)
    }else{
      setFilterBool(true)
      dispatch(filterCountries(filterRegionTerm));
    }
    
  },[filterRegionTerm])

  useEffect(() => {
    dispatch(searchAndFilterCountries(filterRegionTerm))
  },[filterRegionTerm , searchTerm])


  return (
    <div className="font-poppins bg-gray-100 min-h-screen text-sm">
    <Routes>
      <Route path="/" element={<Home searchBool={searchBool} filterBool={filterBool} setFilterRegionTerm={setFilterRegionTerm} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />}/> 
      <Route path="/country-details/:countryName" element={<DetailsPage />} />
    </Routes>
      
    </div>
  )
}

export default App
