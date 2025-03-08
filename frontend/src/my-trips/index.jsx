import { db } from "@/service/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

function MyTrips() {
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  // use to get all user trips
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl text-center bg-gradient-to-r from-[#007bff] to-[#6f42c1] bg-clip-text text-transparent">
        My Trips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {userTrips.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem key={index} trip={trip} />
            ))
          : Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-lg rounded-xl animate-pulse"
              >
                {/* Image Placeholder */}
                <div className="h-60 w-full bg-gray-300 rounded-xl"></div>

                {/* Text Placeholder */}
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default MyTrips;
