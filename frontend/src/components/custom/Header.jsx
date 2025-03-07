import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from "@react-oauth/google";
import { useNavigation } from "react-router-dom";


function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="" />
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
            
            <Popover>
              <PopoverTrigger><img
              src={user ? user?.picture : "/userFallback.jpg"}
              className="h-10 w-10 rounded-full"
            /></PopoverTrigger>
              <PopoverContent>
                <h2 onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }} className="cursor-pointer">Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
