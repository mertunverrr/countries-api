import { useAppSelector } from '../../redux/hooks'

function CountryDetail() {
    const countriesData = useAppSelector((store) => store.countries)
    const countries = countriesData.data
    console.log(countries)
  return (
    <div className='container pt-16 flex space-x-32'>
        <img src={countries[1].flag} alt="country flag" className='rounded-md basis-1/2' />
        <div className='flex basis-1/2 flex-col space-y-6 justify-center'>
            <h2 className='text-xl font-bold'>{countries[1].name}</h2>
            <div className='grid grid-cols-2 gap-y-2'>
                <p className='font-medium'>Population: <span className='font-normal'>{countries[1].population.toLocaleString()}</span></p>
                <p className='font-medium'>Region: <span className='font-normal'>{countries[1].region}</span></p>
                <p className='font-medium'>Sub Region: <span className='font-normal'>{countries[1].subregion}</span></p>
                <p className='font-medium'>Capital: <span className='font-normal'>{countries[1].capital}</span></p>
                <p className='font-medium'>Top Level Domain: <span className='font-normal'>{countries[1].population}</span></p>
                <p className='font-medium'>Currencies: {countries[1].currencies.map((currency , index) => (<span className='font-normal' key={index}>{currency.name}  </span>))}</p>
                <p className='font-medium'>Languages: {countries[1].languages.map((langName , index) => (<span className='font-normal' key={index}>{langName.name}  </span>))}</p>
            </div>
            <h3 className='font-medium space-x-2'>Border Countries: {countries[0].borders.map((border , index) => (<button className='font-normal bg-white p-0.5 px-2.5 rounded-md' key={index}>{border}</button>))}</h3>
        </div>
    </div>
  )
}

export default CountryDetail