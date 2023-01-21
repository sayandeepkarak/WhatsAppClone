import React from "react";
import {
  ProfileDetailsBlock,
  ProfileImage,
  ProfileImageArea,
} from "./chatlistsection.styled";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const userData = useSelector((state) => state.userData.value);
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${String(
    userData.photoUrl
  ).replace("\\", "/")}`;

  return (
    <>
      <ProfileImageArea>
        <ProfileImage src={photoUrl} alt="x" />
      </ProfileImageArea>

      <ProfileDetailsBlock>
        <p>Your name</p>
        <span>{userData.fullName}</span>
      </ProfileDetailsBlock>
    </>
  );
};

export default ProfileSection;
