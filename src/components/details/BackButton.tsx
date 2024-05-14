import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
    useEffect(() => {

    } , [])
  return (
    <div className='container pt-2 px-8 lg:px-0 md:pt-8'>
        
          <Link to="/">
            <button className='p-2 w-28 bg-white rounded-md font-medium drop-shadow-sm hover:drop-shadow-lg hover:-translate-x-1 duration-500'>
              Back 
            </button>
          </Link>
            
       
    </div>
  )
}

export default BackButton