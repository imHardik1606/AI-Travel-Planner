import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
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
    <Link to={`/view-trip/${trip.id}`} className="flex justify-center">
  <div className="bg-white rounded-2xl p-6 w-full sm:w-72 hover:scale-105 transition-all shadow-lg">
    <img
      src={photoUrl ? photoUrl : "/trip.jpg"}
      alt="Trip"
      className="object-cover rounded-xl h-60 w-full"
    />
    <div className="text-center mt-4">
      <h2 className="font-bold text-lg text-gray-800">
        {trip?.userSelection?.location?.label}
      </h2>
      <h2 className="text-sm text-gray-600 mt-1">
        {trip?.userSelection?.noOfDays} Days trip with{" "}
        {trip?.userSelection?.budget} budget for{" "}
        {trip?.userSelection?.traveler}
      </h2>
    </div>
  </div>
</Link>

  );
}

export default UserTripCardItem;
