import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config"; // Import Firebase authentication
import "./HeroSection.css";

const HeroSection = () => {
  const [userName, setUserName] = useState(null); // State to store the user's name

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;

      // Check if the email domain is 'nu.edu.pk'
      if (email && email.endsWith("@nu.edu.pk")) {
        console.log("Login successful with:", email);

        // Extract the part before '@' in the email for the username
        const name = email.split("@")[0];
        setUserName(name); // Set the extracted name to the state
      } else {
        alert("Only nu.edu.pk email accounts are allowed for login.");
        auth.signOut(); // Sign the user out if they don't match the domain
      }
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <div className="HeroSectionContainer">
      <div className="Hero">
        <h2>
          Find Your <br /> Perfect <br /> Course Swap
        </h2>
      </div>

      <div className="Description">
        <p>
          Join SwapBuddy today and discover the easiest way to exchange courses
          with fellow students. Explore our innovative platform to create your
          clash-free timetable effortlessly.
        </p>
        {/* Display user's name and options after login */}
        {userName ? (
          <div className="LoggedInContainer">
            <p className="Greeting">Hello, {userName}! What are you up to today?</p>
            <div className="ActionButtons">
              <button className="Join">Swap</button>
              <br></br>
              <button className="Join">Create Timetable</button>
              <br></br>
              <button className="Join">Choose Electives</button>
            </div>
          </div>
        ) : (
          <button className="Join" onClick={handleGoogleLogin}>
            Join Now
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
