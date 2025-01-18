import React from 'react'
import Card from '../../components/Card'

function page() {
  return (
    <>
       <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card/>
          
        </div>
      </>
  )
}

export default page