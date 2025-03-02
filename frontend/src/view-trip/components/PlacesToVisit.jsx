import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl my-6">Places to Visit</h2>
      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium text-lg my-2">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.places?.map((place, placeIndex) => (
                <div key={placeIndex} className="">
                  {" "}
                  {/* Added key here */}
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.bestTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
