import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateTrip from "./create-trip/index";
import Header from "./components/custom/Header";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from "./view-trip/[tripId]/index";
import Footer from "./view-trip/components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/create-trip" element={<CreateTrip />}></Route>
          <Route path="/view-trip/:tripId" element={<Viewtrip/>}></Route>
        </Routes>
        <Footer/>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
