import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl my-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link to={"https://www.google.com/maps/search/?api=1&query=" + hotel?.hotelName + " , " + hotel?.hotelAddress} key={index} target="_blank">
            <div
              className="hover:scale-105 transition-all shadow-lg rounded-xl cursor-pointer p-4"
            >
              <img src="/trip.jpg" alt="" className="rounded-lg" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel?.hotelName}</h2>
                <h2 className="text-xs text-gray-600">
                  📍 {hotel?.hotelAddress}
                </h2>
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
        ))}
      </div>
    </div>
  );
}

export default Hotels;
