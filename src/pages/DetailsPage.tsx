import Header from "../components/Header"
import BackButton from "../components/details/BackButton"
import CountryDetail from "../components/details/CountryDetail"

function DetailsPage() {
  return (
    <div className="h-screen">
        <Header />
        <BackButton />
        <CountryDetail />
    </div>
  )
}

export default DetailsPage