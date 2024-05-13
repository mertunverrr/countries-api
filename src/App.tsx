import { useAppSelector, useAppDispatch } from './redux/hooks'
import { useEffect } from 'react';
import {getAllCountries }  from './redux/countriesSlice';
function App() {

  const dispatch = useAppDispatch()
  const countriesData = useAppSelector(store => store.countries);
  console.log(countriesData.data);

  useEffect(() => {
    dispatch(getAllCountries())
  },[])

  return (
    <h1 className="text-3xl font-bold underline">
    </h1>
  )
}

export default App
