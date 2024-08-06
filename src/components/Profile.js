import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <p>User ID: {userId}</p>
      <h2>Profile Information</h2>
      <p>Some user-specific information here...</p>
      <h2>Address</h2>
      <p>User address details here...</p>
    </div>
  );
};

export default Profile;
