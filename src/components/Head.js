import React from 'react'

const Head = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-[auto,1fr,auto] items-center gap-4 border-b border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur'>
      <div className='flex items-center gap-3'>
        <button className='rounded-full p-2 transition hover:bg-gray-100'>
          <img className='h-7 w-7 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQod3u0NcchaahcIYTapcA403hRaYhd5l0BoA&s" alt="menu" />
        </button>
        <img className='h-24 w-auto object-contain' src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="youtubelogo" />
      </div>

      <div className='mx-auto flex w-full max-w-2xl items-center'>
        <input
          type="text"
          placeholder='Search videos...'
          className='w-full rounded-l-full border border-gray-300 bg-gray-50 px-5 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white'
        />
        <button className='rounded-r-full border border-l-0 border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200'>
          Search
        </button>
      </div>

      <div className='flex justify-end'>
        <img className='h-10 w-10 rounded-full border border-gray-300 object-cover shadow-sm' src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg" alt="usericon" />
      </div>
    </header>
  )
}

export default Head