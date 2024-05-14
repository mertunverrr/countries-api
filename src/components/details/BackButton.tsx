import { useEffect } from 'react'

function BackButton() {
    useEffect(() => {

    } , [])
  return (
    <div className='container pt-2 px-8 lg:px-0 md:pt-8'>
        <button className='p-2 w-28 bg-white rounded-md font-medium drop-shadow-sm hover:drop-shadow-lg hover:-translate-x-1 duration-500'>
            Back
        </button>
    </div>
  )
}

export default BackButton