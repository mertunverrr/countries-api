
import Header from './components/Header';
import Input from './components/search/Input';
import Filter from './components/search/Filter';
import Country from './components/Country';
function App() {

 

  return (
    <div className='font-poppins bg-gray-100 min-h-screen text-sm'>
      <Header />
      <div className='container flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between pt-2 px-8 lg:px-0 md:pt-8'>
      <Input />
      <Filter />
      </div>
      <Country />
      
    </div>
  )
}

export default App
