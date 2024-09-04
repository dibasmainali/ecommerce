import React from 'react'

function Banner() {
  return (
    <div className='w-100% h-[400px] bg-[url("https://img.freepik.com/premium-photo/floating-computer-laptop-isolated-orange-horizontal-banner-background_118047-19394.jpg")] bg-no-repeat bg-cover	bg-center	 relative		'>
      {/* <img src="https://img.freepik.com/premium-photo/floating-computer-laptop-isolated-orange-horizontal-banner-background_118047-19394.jpg" alt="banner" className='w-[100%] h-[100%]'/> */}
      <h1 className='text-6xl text-white text-center absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2'>Welcome to LaptopHub!</h1>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 absolute top-[70%] left-[62%] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Shop Now
      </button>
    </div>

  )
}

export default Banner
