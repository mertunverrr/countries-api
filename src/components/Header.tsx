import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='bg-white drop-shadow-sm px-6 lg:px-0'>
      <div className='container pt-7 pb-5'>
        <Link to="/"><h1 className='font-semibold text-2xl tracking-wide cursor-pointer'>Where in the world?</h1></Link>
      </div>
    </header>
  )
}

export default Header