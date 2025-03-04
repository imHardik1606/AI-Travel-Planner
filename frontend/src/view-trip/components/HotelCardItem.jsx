import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {

    const [photoUrl, setPhotoUrl] = useState();
    
      useEffect(() => {
        hotel && GetPlacePhoto();
      }, [hotel]);
    
      const GetPlacePhoto = async () => {
        const data = {
          textQuery: hotel?.hotelName
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        " , " +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      {/* <div className="hover:scale-105 transition-all shadow-lg rounded-xl cursor-pointer p-4 flex flex-col h-[300px]">
  <img src={photoUrl ? photoUrl : "/trip.jpg"} alt="" className="rounded-lg h-[150px] w-full object-cover" />
  <div className="my-2 flex flex-col gap-2 flex-grow">
    <h2 className="font-medium">{hotel?.hotelName}</h2>
    <h2 className="text-xs text-gray-600">📍 {hotel?.hotelAddress}</h2>
    <h2 className="text-sm">💰 ${hotel?.price} per night</h2>
    <h2 className="text-sm">⭐ {hotel?.rating}</h2>
  </div>
</div> */}

<div className="hover:scale-105 transition-all shadow-lg rounded-xl cursor-pointer p-4">
        <img src={photoUrl ? photoUrl : "/trip.jpg"} alt={hotel?.hotelName + " Image"} className="rounded-lg h-[150px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-600">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">💰 ${hotel?.price} per night</h2>
          <h2 className="text-sm">⭐ {hotel?.rating}</h2>
          {/* <h2 className="text-sm">
                {Array.from({ length: hotel?.rating || 0 }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </h2> */}
        </div>
      </div>

    </Link>
  );
}

export default HotelCardItem;
