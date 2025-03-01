import React from 'react'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl my-5'>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-rows-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotels?.map((hotel, index) => (
                <div>
                    <img src="/trip.jpg" alt="" className='rounded-lg' />
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium'>{hotel.hotelName}</h2>
                        <h2 className='text-xs text-gray-600'>📍 {hotel.hotelAddress}</h2>
                        <h2 className='text-sm'>💰 ${hotel.price} per night</h2>
                        <h2 className='text-sm'>{hotel.rating}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotels