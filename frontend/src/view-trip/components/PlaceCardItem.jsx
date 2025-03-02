import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from '@/components/ui/button';

function PlaceCardItem({place}) {
  return (
    <div className='border rounded-xl p-3 mt-2 flex gap-4'>
        <img src="/trip.jpg" alt="" className='w-[150px] h-[150px] rounded-xl'/>
        <div>
            <h2 className='font-bold text-lg'>{place.placeName}</h2>
            <p className='text-sm text-gray-400'>{place.placeDetails}</p>
            <h2 className='mt-2 text-sm'>🕙{place.travelTime}</h2>
            <Button><FaMapLocationDot /></Button>
            
        </div>
    </div>
  )
}

export default PlaceCardItem