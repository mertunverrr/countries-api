import { useNavigate } from 'react-router-dom'
import { ICountryType } from '../../redux/countriesSlice'
import { useAppSelector } from '../../redux/hooks'

interface CountryProps {
  country: ICountryType
}

function CountryDetail({country}:CountryProps) {
    const countriesData = useAppSelector((store) => store.countries)
    const countries = countriesData.data
    console.log(countries)

    const navigate = useNavigate();
    const borderNavigate = (border:string) => {
      countries.map((country) => {
        if(country.alpha3Code.toLowerCase() === border.toLowerCase()){
          navigate(`/country-details/${country.name}`)
        }
      })
    }
  return (
    <div className='container pt-16 flex space-x-32'>
      <div className='basis-1/2'>
      <img src={country.flag} alt="country flag" className='rounded-md w-full max- h-96' />
      </div>
       
        <div className='basis-1/2 flex-col space-y-6 flex justify-center'>
            <h2 className='text-xl font-bold'>{country.name}</h2>
            <div className='grid grid-cols-2 gap-y-2'>
                <p className='font-medium'>Population: <span className='font-normal'>{country.population.toLocaleString()}</span></p>
                <p className='font-medium'>Region: <span className='font-normal'>{country.region}</span></p>
                <p className='font-medium'>Sub Region: <span className='font-normal'>{country.subregion}</span></p>
                <p className='font-medium'>Capital: <span className='font-normal'>{country.capital}</span></p>
                <p className='font-medium'>Top Level Domain: <span className='font-normal'>{country.topLevelDomain}</span></p>
                <p className='font-medium'>Currencies: {country.currencies && country.currencies.map((currency , index) => (<span className='font-normal' key={index}>{currency.name}  </span>))}</p>
                <p className='font-medium'>Languages: {country.languages && country.languages.map((langName , index) => (<span className='font-normal' key={index}>{langName.name}  </span>))}</p>
            </div>
            <h3 className='font-medium space-x-2'>Border Countries: {country.borders && country.borders.map((border , index) => (
            <button className='font-normal bg-white p-0.5 px-2.5 rounded-md shadow-sm hover:shadow-lg' key={index}
            onClick={() => borderNavigate(border)}>
            {border}</button>))}</h3>
        </div>
    </div>
  )
}

export default CountryDetail