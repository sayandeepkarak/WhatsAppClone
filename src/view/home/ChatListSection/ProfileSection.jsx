import React from "react";
import {
  ProfileDetailsBlock,
  ProfileImage,
  ProfileImageArea,
} from "./chatlistsection.styled";
import { useSelector } from "react-redux";
import defaultImage from "../../../assets/images/defaultuser.jpg";

const ProfileSection = () => {
  const userData = useSelector((state) => state.userData.value);
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${userData.photoUrl}`;
  const handleImageError = (e) => (e.target.src = defaultImage);

  return (
    <>
      <ProfileImageArea>
        <ProfileImage src={photoUrl} alt="x" onError={handleImageError} />
      </ProfileImageArea>

      <ProfileDetailsBlock>
        <p>Your name</p>
        <span>{userData.fullName}</span>
      </ProfileDetailsBlock>
    </>
  );
};

export default ProfileSection;
