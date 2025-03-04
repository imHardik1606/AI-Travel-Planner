import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  
    useEffect(() => {
      place && GetPlacePhoto();
    }, [place]);
  
    const GetPlacePhoto = async () => {
      const data = {
        textQuery:  place?.placeName
      };
  
      const result = await GetPlaceDetails(data).then((resp) => {
        // console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace(
          "{NAME}",
          resp.data.places[0].photos[3].name
        );
  
        setPhotoUrl(PhotoUrl);
        // console.log(photoUrl);
      });
    };

  return (
    <Link to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName} target='_blank'>
      <div className='border rounded-xl p-3 mt-2 flex flex-col md:flex-row gap-4 hover:scale-105 shadow-md transition-all cursor-pointer'>
        {/* Image Section */}
        <img src={photoUrl ? photoUrl : "/trip.jpg"} alt="" className='w-full md:w-[150px] h-[150px] rounded-xl object-cover' />
        
        {/* Text Section */}
        <div className='w-full md:w-auto text-center md:text-left'>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <h2 className='mt-2 text-sm'>🕙{place.travelTime}</h2>
          {/* <Button size="sm" className="mt-3"><FaMapLocationDot /></Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
