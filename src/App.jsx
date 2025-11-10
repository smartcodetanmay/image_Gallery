import React from 'react'
const API_KEY ="K7ybUmXM76Ebl8Lqvopn0AvC9Bt24dX7UCuNT58nSrdaxbJDETKhzrqc";
const API="https://api.pexels.com/v1/search?query=people"
const App = () => {
  
  return (
    <div className='min-h-screen bg-amber-100'>
      <h1 className='text-center text-5xl text-indigo-600 font-bold'>
        📷 Image Gallery Nature
      </h1>

      <div className='text-center mt-8'>
        <input
          type="text"
          placeholder='Image search here'
          className='p-3 bg-white rounded-l-2xl focus:outline-indigo-600'
        />

        <button
          className='p-3 rounded-r-2xl text-white font-semibold
          bg-linear-to-r from-fuchsia-600 via-purple-600 to-indigo-600
          hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]
          hover:scale-110 transition-all duration-300'
        >
          Search
        </button>
      </div>

     
      <div className='grid grid-cols-3 gap-5 p-8'>
        {
          Array(12).fill(0).map((item, index) => (
            <div 
              key={index}
              className='h-40 bg-white rounded-xl shadow-lg'
            ></div>
          ))
        }
      </div>

    </div>
  )
}

export default App
