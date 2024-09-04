import React from 'react'

function FilterBar() {
  return (
    <div className='border-2 bg-orange-100'>
      <div className='flex justify-between items-center mx-10 h-[70px]'>
        <div className='flex items-center gap-5'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPnI4sG-pyYcij5D-5DUbwGaEBqjhMYJUUQ&s" alt="" className=' w-[70px] aspect-auto	'/>
        <h1>LaptopHub</h1>
        </div>
        <div>
        <input type="text" className='border-2 rounded-full w-[400px] ' placeholder="      Search..." />
        <button type="submit">Search</button>
        </div>
        <div>
        <label>Filter by:</label>
        <select>
          <option value="date">Best Match</option>
          <option value="name">Low to high</option>
          <option value="name">HIgh to low</option>
        </select>
        </div>

      </div>
    </div>
  )
}

export default FilterBar
