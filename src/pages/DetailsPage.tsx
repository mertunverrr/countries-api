import { useParams } from "react-router-dom";
import Header from "../components/Header"
import BackButton from "../components/details/BackButton"
import CountryDetail from "../components/details/CountryDetail"
import { useAppSelector } from "../redux/hooks";

function DetailsPage() {
  const { countryName } = useParams(); 
  const countryData = useAppSelector((store) => store.countries)
  const countries = countryData.data;

  if(!countryName){
    return <div>Sayfa Bulunamadı</div>
  }

  return (
    <div className="h-screen">
        <Header />
        <BackButton />
        {
          countries && countries.map((country) => {
            if(countryName.toLowerCase() === country.name.toLowerCase()){
              return <CountryDetail country={country}/>
            }
          })
        }
    </div>
  )
}

export default DetailsPage