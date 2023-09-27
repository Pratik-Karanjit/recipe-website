import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getLoginInfo } from "../utils/loginInfo";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  let readData = async () => {
    try {
      let response = await axios({
        url: "http://localhost:8000/users/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`,
        },
      });

      const { result } = response.data;
      const { name, age, email } = result;

      setName(name);
      setAge(age);
      setEmail(email)
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    readData();
  }, [params.id]);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="profile-section">
        <label className="profile-label">User Name:</label>
        <p className="profile-info">{name}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Age:</label>
        <p className="profile-info">{age}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Email:</label>
        <p className="profile-info">{email}</p>
        <button onClick={(e) => {
                navigate("/change-email")
        }}>Change Email</button>
      </div>
      
      <button
        className="profile-button"
        onClick={(e) => {
          navigate("/update-my-profile");
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default MyProfile;
